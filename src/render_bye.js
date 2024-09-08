import { html } from "lit";


// Define the rendering function
export function renderBye(c) {
    // Render the HTML template using the provided object `c`
    const htmlTemplate = html`
    <ha-card>
        <div class="card">
            <img class="team-bg" src="${c.logoBG[team]}"
                onerror="this.onerror=null; this.src='${c.logoBGAlternate[team]}';" />
            <div class="card-content">
                <div class="team">
                    <img class="logo" src="${c.logo[team]}" 
                        onerror="this.onerror=null; this.src='${c.logoAlternate[team]}'; this.onerror=function() { this.src='${c.logoError[team]}'; };" />
                    <div class="name">${c.name[team]}</div>
                </div>
                <div class="bye">${c.byeTerm}</div>
            </div>
        </div>
    </ha-card>
`;
    // Return the HTML template
    return htmlTemplate;
}