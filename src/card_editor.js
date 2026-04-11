//
//  Define and register the UI Card Editor 
//
import { html, LitElement } from "lit";


export class TeamtrackerCardEditor extends LitElement {

    static get properties() {
        return {
            _config: { type: Object },
            currentPage: { type: String },
            entities: { type: Array },
            hass: { type: Object },
            _entity: { type: String },
        };
    }

    constructor() {
        super();
        this.currentPage = 'card';
        this._entity = '';
        this.entities = [];
        this._formValueChanged = this._formValueChanged.bind(this);
    }


    setConfig(config) {
        if (!config) {
            throw new Error("Invalid configuration");
        }
        this._config = config;
        this._entity = config.entity || '';
    }
    

    get config() {
        return this._config;
    }
    
    updated(changedProperties) {
        if (changedProperties.has('hass')) {
            this.fetchEntities();
        }
        if (changedProperties.has('_config') && this._config && this._config.entity) {
            this._entity = this._config.entity;
        }
    }
    
    fetchEntities() {
        if (this.hass) {
            this.entities = Object.keys(this.hass.states).filter((e) =>
            e.startsWith('sensor.') &&
            this.hass.states[e].attributes.hasOwnProperty('sport')
            )
            .sort((a, b) => a.localeCompare(b));
        }
    }

    configChanged(newConfig) {
        const event = new Event("config-changed", {
            bubbles: true,
            composed: true,
        });
        event.detail = { config: newConfig };
        this.dispatchEvent(event);
    }
    
    _EntityChanged(event, key) {
        if (!this._config) {
            return;
        }
    
        const newConfig = { ...this._config };
    
        if (key === 'entity') {
            newConfig.entity = event.target.value;
            this._entity = event.target.value;
        }
    
        this.configChanged(newConfig);
        this.requestUpdate();
    }
    
    _valueChanged(event, key) {
        if (!this._config) {
            return;
        }

        // ha-selector fires detail.value; ha-switch uses target.checked; others use target.value
        let value;
        if (event.detail && event.detail.value !== undefined) {
            value = event.detail.value;
        } else if (event.target.checked !== undefined) {
            value = event.target.checked;
        } else {
            value = event.target.value;
        }

        let newConfig = { ...this._config };

        if (key.includes('.')) {
            const parts = key.split('.');
            let currentLevel = newConfig;

            for (let i = 0; i < parts.length - 1; i++) {
                const part = parts[i];

                currentLevel[part] = { ...currentLevel[part] };
                
                currentLevel = currentLevel[part];
            }
            currentLevel[parts[parts.length - 1]] = value;
        } else {
            newConfig[key] = value;
        }

        this.configChanged(newConfig);
        this.requestUpdate();
    }
    

    _formValueChanged(event) {
        if (event.target.tagName.toLowerCase() === 'ha-form') {
            const newConfig = event.detail.value;
            this.configChanged(newConfig);
            this.requestUpdate();
        }
    }
    
    // This function is called when the input element of the editor loses focus
    entityChanged(ev) {

        // We make a copy of the current config so we don't accidentally overwrite anything too early
        const _config = Object.assign({}, this._config);
        // Then we update the entity value with what we just got from the input field
        _config.entity = ev.target.value;
        // And finally write back the updated configuration all at once
        this._config = _config;

        // A config-changed event will tell lovelace we have made changed to the configuration
        // this make sure the changes are saved correctly later and will update the preview
        const event = new CustomEvent("config-changed", {
            detail: { config: _config },
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(event);
    }

    render() {
        if (!this.hass || !this._config) {
            return html``;
        }

        return html`
        <style>
        .switch-label {
            padding-left: 14px;
        }
        .switch-container {
            margin-top: 12px;
            margin-left: 15px;

        }
        .textfield-container {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
            gap: 0px;
        }
        .ha-textfield {
            flex-basis: 50%;
            flex-grow: 1;
        }
        .indented-container {
            margin-left: 55px;
        }
        h4 {
            margin-bottom: 0px;
        }
        </style>
        <div>
            <h4>Teamtracker Sensor:</h4>
            <div class="textfield-container">
                <ha-selector
                    .value=${this._config.entity ?? ''}
                    .selector=${{
                        entity: {
                            filter: { integration: 'teamtracker' }
                        }
                    }}
                    .hass=${this.hass}
                    @value-changed=${(e) => {
                        const newConfig = { ...this._config, entity: e.detail.value };
                        this._entity = e.detail.value;
                        this.configChanged(newConfig);
                        this.requestUpdate();
                    }}
                ></ha-selector>
            </div>
            <hr>
            <h4>Settings:</h4>
            <ha-selector
                label="Home Side"
                .value=${this._config.home_side || 'team'}
                .selector=${{
                    select: {
                        mode: 'dropdown',
                        options: [
                            { value: 'team',  label: 'Team on Left' },
                            { value: 'left',  label: 'Home on Left' },
                            { value: 'right', label: 'Home on Right' },
                        ]
                    }
                }}
                @value-changed=${(e) => {
                    const val = e.detail.value === 'team' ? '' : e.detail.value;
                    const newConfig = { ...this._config, home_side: val };
                    this.configChanged(newConfig);
                    this.requestUpdate();
                }}
            ></ha-selector>
            <div class="switch-container">
                <ha-switch
                    @change="${(e) => this._valueChanged(e, 'show_league')}"
                    .checked="${this._config.show_league === true}"
                    >
                </ha-switch>
                <label class="switch-label">
                    Show League
                </label>
            </div>
            <div class="switch-container">
                <ha-switch
                    @change="${(e) => this._valueChanged(e, 'show_rank')}"
                    .checked="${this._config.show_rank !== false}"
                    >
                </ha-switch>
                <label class="switch-label">
                    Show Rank
                </label>
            </div>
            <div class="switch-container">    
                <ha-switch
                    @change="${(e) => this._valueChanged(e, 'show_timeouts')}"
                    .checked="${this._config.show_timeouts!== false}"
                    >
                </ha-switch>
                <label class="switch-label">
                    Show Timeouts
                </label>
            </div>
            <div class="switch-container">    
                <ha-switch
                    @change="${(e) => this._valueChanged(e, 'outline')}"
                    .checked="${this._config.outline=== true}"
                    >
                </ha-switch>
                <label class="switch-label">
                    Show Outline
                </label>
            </div>
            <div class="indented-container">
                <ha-textfield
                    label="Outline Color"
                    .value="${this._config.outline_color || 'lightgrey'}"
                    @change="${(e) => this._valueChanged(e, 'outline_color')}"
                    >
                </ha-textfield>
            </div>
            <hr>
            <h4>Overrides:</h4>
            <ha-textfield
                label="Title"
                .value="${this._config.card_title || ''}"
                @change="${(e) => this._valueChanged(e, 'card_title')}"
                >
            </ha-textfield>
            </br>
            <ha-textfield
                label="Team URL"
                .value="${this._config.team_url || ''}"
                @change="${(e) => this._valueChanged(e, 'team_url')}"
                >
            </ha-textfield>
            </br>
            <ha-textfield
                label="Opponent URL"
                .value="${this._config.opponent_url || ''}"
                @change="${(e) => this._valueChanged(e, 'opponent_url')}"
                >
            </ha-textfield>
            </br>
            <ha-textfield
                label="Bottom URL"
                .value="${this._config.bottom_url || ''}"
                @change="${(e) => this._valueChanged(e, 'bottom_url')}"
                >
            </ha-textfield>
            <hr>
            <div class="switch-container">    
                <ha-switch
                    @change="${(e) => this._valueChanged(e, 'debug')}"
                    .checked="${this._config.debug=== true}"
                    >
                </ha-switch>
                <label class="switch-label">
                    Show Debug Info
                </label>
            </div>
        </div>
        `;
    }
}