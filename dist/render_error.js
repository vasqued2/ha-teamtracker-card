import { html } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";


export function renderMissingConfig() {
    // Render the HTML template using the provided object `c`
    const htmlTemplate = html``;
    // Return the HTML template
    return htmlTemplate;
}

export function renderMissingObj(entity) {
    // Render the HTML template using the provided object `c`
    const htmlTemplate = html`
        <ha-card>Unknown entity: ${entity}</ha-card> 
    `;
    // Return the HTML template
    return htmlTemplate;
}

export function renderStateUnavailable(entity) {
    // Render the HTML template using the provided object `c`
    const htmlTemplate = html`
    <style>
        ha-card {padding: 10px 16px;}
    </style>
    <ha-card>
        Sensor unavailable: ${entity}
    </ha-card>
    `;
    // Return the HTML template
    return htmlTemplate;
}

export function renderStateInvalid() {
    // Render the HTML template using the provided object `c`
    const htmlTemplate = html`
    <style>
        ha-card {padding: 10px 16px;}
    </style>
    <ha-card>
        State Invalid: ${this._config.state}
    </ha-card>
    `;
    // Return the HTML template
    return htmlTemplate;
}
