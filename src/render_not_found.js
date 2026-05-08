import { html } from "lit";
import { styleMap } from 'lit/directives/style-map.js';


// Define the rendering function
export function renderNotFound(c) {
    // Render the HTML template using the provided object `c`
    const htmlTemplate = html`
        <ha-card>
            <div class="card">
                <div class="title">${c.title}</div>
                <div class="subtitle" style=${styleMap({ '--subtitle-display': c.subtitleDisplay })}>${c.subtitle}</div>
                <img class="team-bg" src="${c.notFoundLogoBG}" />
                <div class="card-content">
                    <div class="team">
                        <img class="logo" src="${c.notFoundLogoBG}" />
                        <div class="notFoundLeague">${c.notFoundLeague}</div>
                    </div>
                    <div class="notFoundWrapper">
                        <div class="notFound1">${c.notFoundTerm1}</div>
                        <div class="notFound2">${c.notFoundTerm2}</div>
                    </div>
                </div>
            </div>
        </ha-card>
    `;
    // Return the HTML template
    return htmlTemplate;
}