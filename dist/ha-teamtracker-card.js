//import { html, LitElement } from "https://unpkg.com/lit?module";
import { html, LitElement } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";
import { Translator } from "./localize/translator.js";
import { MyCustomCardEditor } from "./card_editor.js";
import { VERSION } from "./const.js";
import { renderBye } from './render_bye.js';
import { renderIn } from './render_in.js';
import { renderNotFound } from './render_not_found.js';
import { renderPost } from './render_post.js';
import { renderPre } from './render_pre.js';
import { setBaseball, setBasketball, setCricket, setGolf, setHockey, setMMA, setRacing, setSoccer, setTennis, setVolleyball } from './set_sports.js';

class TeamTrackerCard extends LitElement {


    static get properties() {
        return {
            hass: {},
            _config: {},
        };
    }

    setConfig(config) {
        this._config = config;
    }

    getCardSize() {
        return 5;
    }

  render() {
    var c = {};

    if (!this.hass || !this._config) {
      return html``;
    }

    var lang = this.hass.selectedLanguage || this.hass.language  || navigator.language || "en"
    var t = new Translator(lang);

    const stateObj = this.hass.states[this._config.entity];
    var sport = stateObj.attributes.sport;
    if (!(["australian-football", "baseball", "basketball", "cricket", "football","hockey", "soccer", "volleyball", "golf", "mma", "racing", "tennis"].includes(sport))) {
      sport = "default"
    }

    const cardTitle = this._config.card_title;
    const outline = this._config.outline;
    const outlineColor = this._config.outline_color;
    const showLeague = this._config.show_league;
//    const showTicker = this._config.show_ticker;
    var homeSide = String(this._config.home_side).toUpperCase();

    c.logoBG = [];
    c.logo = [];
    c.name = [];
    c.initials = [];
    c.rank = [];
    c.record = [];
    c.score = [];
    c.scoreOp = [];
    c.scoreSize = "3em";
    c.barLabel= [];
    c.barLength = [];
    c.color = [];
    c.timeouts =[];
    c.possessionOp = [];

    var team = 1;
    var oppo = 2;
    if (((homeSide == "RIGHT") && (stateObj.attributes.team_homeaway == "home")) ||
        ((homeSide == "LEFT")  && (stateObj.attributes.opponent_homeaway == "home"))) {
        team = 2;
        oppo = 1;
    }

    c.barLength[team] = 0;
    if (stateObj.attributes.team_win_probability) {
        c.barLength[team] = (stateObj.attributes.team_win_probability * 100).toFixed(0);
    }
    c.barLength[oppo] = 0;
    if (stateObj.attributes.opponent_win_probability) {
        c.barLength[oppo] = (stateObj.attributes.opponent_win_probability * 100).toFixed(0);
    }
    c.score[team] = stateObj.attributes.team_score;
    c.score[oppo] = stateObj.attributes.opponent_score;

    var time_format = "language";
    try {
      time_format = this.hass.locale["time_format"] || "language";
    }
    catch (e) {
      time_format = "language"
    }

    var gameDate = new Date (stateObj.attributes.date);
    var gameDateStr = gameDate.toLocaleDateString(lang, { month: 'short', day: '2-digit' });

    var todayDate = new Date();
    var todayDateStr = todayDate.toLocaleDateString(lang, { month: 'short', day: '2-digit' });

    var tomorrowDate = new Date();
    tomorrowDate.setDate(todayDate.getDate() + 1);
    var tomorrowDateStr = tomorrowDate.toLocaleDateString(lang, { month: 'short', day: '2-digit' });

    var nextweekDate = new Date();
    nextweekDate.setDate(todayDate.getDate() + 6);

    c.gameWeekday = gameDate.toLocaleDateString(lang, { weekday: 'long' });
    if (gameDateStr === todayDateStr) {
        c.gameWeekday = t.translate("common.today");
    }
    else if (gameDateStr === tomorrowDateStr) {
        c.gameWeekday = t.translate("common.tomorrow");
    }
    c.gameDatePOST = gameDateStr;
    c.gameDatePRE = null;
    if (gameDate > nextweekDate) {
        c.gameDatePRE = gameDateStr;
    }

    c.gameTime = gameDate.toLocaleTimeString(lang, { hour: '2-digit', minute:'2-digit' });
    if (time_format == "24") {
      c.gameTime = gameDate.toLocaleTimeString(lang, { hour: '2-digit', minute:'2-digit', hour12:false });
    }
    if (time_format == "12") {
      c.gameTime = gameDate.toLocaleTimeString(lang, { hour: '2-digit', minute:'2-digit', hour12:true });
    }
    if (time_format == "system") {
      var sys_lang = navigator.language || "en"
      c.gameTime = gameDate.toLocaleTimeString(sys_lang, { hour: '2-digit', minute:'2-digit' });
    }

    c.clrOut = 0;
    c.toRadius = 3;
    c.probRadius = 6;
    c.outColor = outlineColor;

    if (outline == true) {
      c.clrOut = 1;
      c.toRadius = 4;
      c.probRadius = 7;
    }
    if (!this._config.outline_color) {
      c.outColor = '#ffffff';
    }

    c.scoreOp[1] = 1;
    c.scoreOp[2] = 1;
    if (Number(c.score[1]) < Number(c.score[2])) {
        c.scoreOp[1] = 0.6;
    }
    if (Number(c.score[2]) < Number(c.score[1])) {
        c.scoreOp[2] = 0.6;
    }

    if (stateObj.attributes.team_homeaway == 'home') {
      c.color[team] = stateObj.attributes.team_colors[0];
      c.color[oppo] = stateObj.attributes.opponent_colors[1];
    }
    else if (stateObj.attributes.team_homeaway == 'away') {
      c.color[team] = stateObj.attributes.team_colors[1];
      c.color[oppo] = stateObj.attributes.opponent_colors[0];
    }
    else {
      c.color[team] = '#ffffff';
      c.color[oppo] = '#000000';
    }

    c.possessionOp[team] = 0;
    c.possessionOp[oppo] = 0;
    if (stateObj.attributes.possession == stateObj.attributes.team_id) {
      c.possessionOp[team] = 1;
    }
    if (stateObj.attributes.possession == stateObj.attributes.opponent_id) {
      c.possessionOp[oppo] = 1;
    }

    if (!stateObj) {
      return html` <ha-card>Unknown entity: ${this._config.entity}</ha-card> `;
    }
    if (stateObj.state == 'unavailable') {
      return html`
        <style>
          ha-card {padding: 10px 16px;}
        </style>
        <ha-card>
          Sensor unavailable: ${this._config.entity}
        </ha-card>
      `;
    }
//
//  Set default values for variable components
//

    c.byeTerm = t.translate("common.byeTerm");
    c.title = cardTitle;
    if (showLeague) {
      c.title = c.title || stateObj.attributes.league
    }

    c.logo[team] = stateObj.attributes.team_logo;
    c.logoBG[team] = stateObj.attributes.team_logo;
    c.name[team] = stateObj.attributes.team_name;
    c.rank[team] = stateObj.attributes.team_rank;
    c.record[team] = stateObj.attributes.team_record;
    c.logo[oppo] = stateObj.attributes.opponent_logo;
    c.logoBG[oppo] = stateObj.attributes.opponent_logo;
    c.name[oppo] = stateObj.attributes.opponent_name;
    c.rank[oppo] = stateObj.attributes.opponent_rank;
    c.record[oppo] = stateObj.attributes.opponent_record;

    if (showLeague) {
      c.logoBG[team] = stateObj.attributes.league_logo
      c.logoBG[oppo] = stateObj.attributes.league_logo
    }

    c.finalTerm = stateObj.attributes.clock + " - " + c.gameDatePOST;
    c.startTerm = t.translate(sport + ".startTerm");
    c.startTime =stateObj.attributes.kickoff_in;
    c.venue = stateObj.attributes.venue;
    c.location = stateObj.attributes.location;

    c.pre1 = stateObj.attributes.odds;
    c.pre2 = '';
    if (stateObj.attributes.overunder) {
      c.pre2 = t.translate(sport + ".overUnder", "%s", String(stateObj.attributes.overunder));
    }
    c.pre3 = stateObj.attributes.tv_network;

    c.in0 = '';
    c.in1 = '';
    if (stateObj.attributes.down_distance_text) {
        c.in1 = t.translate(sport + ".gameStat1", "%s", stateObj.attributes.down_distance_text);
    }
    c.in2 = '';
    if (stateObj.attributes.tv_network) {
        c.in2 = t.translate(sport + ".gameStat2", "%s", stateObj.attributes.tv_network);
    }

    c.gameBar = t.translate(sport + ".gameBar");
    c.barLabel[team] = t.translate(sport + ".teamBarLabel", "%s", String(c.barLength[team]));
    c.barLabel[oppo] = t.translate(sport + ".oppoBarLabel", "%s", String(c.barLength[oppo]));

    c.lastPlay = stateObj.attributes.last_play;
    c.lastPlaySpeed = 18;
    if (c.lastPlay) {
      c.lastPlaySpeed = 18 + Math.floor(c.lastPlay.length/40) * 5;
    }
    c.notFoundLogo = stateObj.attributes.league_logo;
    c.notFoundLogoBG = c.notFoundLogo;
    c.notFoundLeague = null;

    if (stateObj.attributes.league != "XXX") {
      c.notFoundLeague = stateObj.attributes.league;
    }

    c.initialsDisplay = 'none';
    c.playClock = stateObj.attributes.clock;
    c.outsDisplay = 'none';
    c.basesDisplay = 'none';
    c.barDisplay = 'inherit';
    c.barWrapDisplay = "flex";
    c.timeouts[team] = stateObj.attributes.team_timeouts;
    c.timeouts[oppo] = stateObj.attributes.opponent_timeouts;

    c.timeoutsDisplay = 'inline';
    if (this._config.show_timeouts == false) {
      c.timeoutsDisplay = 'none';
    }

    c.rankDisplay = 'inline';
    if (this._config.show_rank == false) {
      c.rankDisplay = 'none';
    }

    c.notFoundTerm1 = stateObj.attributes.team_abbr;
    c.notFoundTerm2 = "NOT_FOUND"
    if (stateObj.attributes.api_message) {
        c.notFoundTerm2 = t.translate("common.api_error")
        var apiTail = stateObj.attributes.api_message.substring(stateObj.attributes.api_message.length - 17)
        if (apiTail.slice(-1) == "Z") {
          var lastDateForm = new Date (apiTail)
          c.notFoundTerm2 = t.translate("common.no_upcoming_games", "%s", lastDateForm.toLocaleDateString(lang))
        }
    }

//
//  Set default baseball values
//
    c.onFirstOp = 0.2;
    c.onSecondOp = 0.2;
    c.onThirdOp = 0.2;
    if (stateObj.attributes.on_first) {
      c.onFirstOp = 1;
    }
    if (stateObj.attributes.on_second) {
      c.onSecondOp = 1;
    }
    if (stateObj.attributes.on_third) {
      c.onThirdOp = 1;
    }

//
//  Set Sport Specific Values
//
    if (sport.includes("baseball")) {
        setBaseball(t, stateObj, c, team, oppo)
    }
    else if (sport.includes("soccer")) {
        setSoccer(t, stateObj, c, team, oppo)
    }
    else if (sport.includes("hockey")) {
        setHockey(t, stateObj, c, team, oppo)
    }
    else if (sport.includes("volleyball")) {
        setVolleyball(t, stateObj, c, team, oppo)
    }
    else if (sport.includes("basketball")) {
        setBasketball(t, stateObj, c, team, oppo)
    }
    else if (sport.includes("tennis")) {
        setTennis(t, stateObj, c, team, oppo)
    }
    else if (sport.includes("mma")) {
        setMMA(t, stateObj, c, team, oppo)
    }
    else if (sport.includes("racing")) {
        setRacing(t, stateObj, c, team, oppo)
    }
    else if (sport.includes("golf")) {
        setGolf(t, stateObj, c, team, oppo)
    }
    else if (sport.includes("cricket")) {
      setCricket(t, stateObj, c, team, oppo)
    }


//
//  NCAA Specific Changes
//
    if (stateObj.attributes.league) {
      if (stateObj.attributes.league.includes("NCAA")) {
          c.notFoundLogo = 'https://a.espncdn.com/i/espn/misc_logos/500/ncaa.png'
      }
    }

//
//  Reduce score font size if needed
//

    if (Math.max(String(c.score[1]).length, String(c.score[2]).length) > 4) {
        c.scoreSize = "2em"
    }

//
//  Add info to title if debug mode is turned on
//

    if (this._config.debug) {
        var lastUpdate = new Date (stateObj.attributes.last_update);
        var updateTime = lastUpdate.toLocaleTimeString(lang, { hour: '2-digit', minute:'2-digit', second:'2-digit'});

        c.title = this._config.entity + " " + c.title + "(";
        if (stateObj.attributes.api_message) {
          c.title = c.title + stateObj.attributes.api_message[0];
        }
        c.title = c.title + updateTime + ") " + VERSION;
    }

    if (stateObj.state == 'PRE') {
      return renderPre(c);
    }

    if (stateObj.state == 'IN') {
      return renderIn(c);
    }

    if (stateObj.state == 'POST') {
      return renderPost(c);
    }

    if (stateObj.state == 'BYE') {
      return renderBye(c);
    }

    if (stateObj.state == 'NOT_FOUND') {
      return renderNotFound(c);
    }
  }

//
// Trigger the UI Card Editor from Card Picker
//
//  static getConfigElement() {
//    // Create and return an editor element
//    return document.createElement("my-custom-card-editor");
//  }
//
//  static getStubConfig() {
//    // Return a minimal configuration that will result in a working card configuration
//    return { entity: "" };
//  }

}

customElements.define("teamtracker-card", TeamTrackerCard);
customElements.define("my-custom-card-editor", MyCustomCardEditor);

console.info("%c TEAMTRACKER-CARD %s IS INSTALLED",
    "color: blue; font-weight: bold",
    VERSION);

//
//  Add card to list of Custom Cards in the Card Picker
//
window.customCards = window.customCards || []; // Create the list if it doesn't exist. Careful not to overwrite it
window.customCards.push({
  type: "teamtracker-card",
  name: "Team Tracker Card",
  preview: false,
  description: "Card to display the ha-teamtracker sensor",
});