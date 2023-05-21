//import { html, LitElement } from "https://unpkg.com/lit?module";
import { html, LitElement } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";
import { Translator } from "./localize/translator.js";
import { MyCustomCardEditor } from "./card_editor.js";
import { renderBye } from './render_bye.js';
import { renderNotFound } from './render_not_found.js';
import { renderPost } from './render_post.js';
import { renderPre } from './render_pre.js';

class TeamTrackerCard extends LitElement {
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

  static get properties() {
    return {
      hass: {},
      _config: {},
    };
  }

  setConfig(config) {
    this._config = config;

    if (config.debug) {
      console.info("%c TeamTracker Card \n%c Version 0.7.3    ",
        "color: orange; font-weight: bold; background: black",
        "color: white; font-weight: bold; background: dimgray");
        console.info(config);
    }
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
    var barLabel= [];
    var barLength = [];
    var color = [];
    var timeouts =[];
    var possessionOp = [];

    var team = 1;
    var oppo = 2;
    if (((homeSide == "RIGHT") && (stateObj.attributes.team_homeaway == "home")) ||
        ((homeSide == "LEFT")  && (stateObj.attributes.opponent_homeaway == "home"))) {
        team = 2;
        oppo = 1;
    }

    barLength[team] = 0;
    if (stateObj.attributes.team_win_probability) {
        barLength[team] = (stateObj.attributes.team_win_probability * 100).toFixed(0);
    }
    barLength[oppo] = 0;
    if (stateObj.attributes.opponent_win_probability) {
        barLength[oppo] = (stateObj.attributes.opponent_win_probability * 100).toFixed(0);
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
    var gameDatePOST = gameDateStr;
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

    var clrOut = 0;
    var toRadius = 3;
    var probRadius = 6;
    var outColor = outlineColor;

    if (outline == true) {
      clrOut = 1;
      toRadius = 4;
      probRadius = 7;
    }
    if (!this._config.outline_color) {
      outColor = '#ffffff';
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
      color[team] = stateObj.attributes.team_colors[0];
      color[oppo] = stateObj.attributes.opponent_colors[1];
    }
    else if (stateObj.attributes.team_homeaway == 'away') {
      color[team] = stateObj.attributes.team_colors[1];
      color[oppo] = stateObj.attributes.opponent_colors[0];
    }
    else {
      color[team] = '#ffffff';
      color[oppo] = '#000000';
    }

    possessionOp[team] = 0;
    possessionOp[oppo] = 0;
    if (stateObj.attributes.possession == stateObj.attributes.team_id) {
      possessionOp[team] = 1;
    }
    if (stateObj.attributes.possession == stateObj.attributes.opponent_id) {
      possessionOp[oppo] = 1;
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

    c.finalTerm = stateObj.attributes.clock + " - " + gameDatePOST;
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

    var in0 = '';
    var in1 = '';
    if (stateObj.attributes.down_distance_text) {
        in1 = t.translate(sport + ".gameStat1", "%s", stateObj.attributes.down_distance_text);
    }
    var in2 = '';
    if (stateObj.attributes.tv_network) {
        in2 = t.translate(sport + ".gameStat2", "%s", stateObj.attributes.tv_network);
    }

    var gameBar = t.translate(sport + ".gameBar");
    barLabel[team] = t.translate(sport + ".teamBarLabel", "%s", String(barLength[team]));
    barLabel[oppo] = t.translate(sport + ".oppoBarLabel", "%s", String(barLength[oppo]));

    var lastPlay = stateObj.attributes.last_play;
    var lastPlaySpeed = 18;
    if (lastPlay) {
      lastPlaySpeed = 18 + Math.floor(lastPlay.length/40) * 5;
    }
    c.notFoundLogo = stateObj.attributes.league_logo;
    c.notFoundLogoBG = c.notFoundLogo;
    c.notFoundLeague = null;

    if (stateObj.attributes.league != "XXX") {
      c.notFoundLeague = stateObj.attributes.league;
    }

    c.initialsDisplay = 'none';
    var playClock = stateObj.attributes.clock;
    var outsDisplay = 'none';
    var basesDisplay = 'none';
    var barDisplay = 'inherit';
    var barWrapDisplay = "flex";
    timeouts[team] = stateObj.attributes.team_timeouts;
    timeouts[oppo] = stateObj.attributes.opponent_timeouts;

    var timeoutsDisplay = 'inline';
    if (this._config.show_timeouts == false) {
      timeoutsDisplay = 'none';
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
//  MLB Specific Changes
//
    var onFirstOp = 0.2;
    var onSecondOp = 0.2;
    var onThirdOp = 0.2;
    if (stateObj.attributes.on_first) {
      onFirstOp = 1;
    }
    if (stateObj.attributes.on_second) {
      onSecondOp = 1;
    }
    if (stateObj.attributes.on_third) {
      onThirdOp = 1;
    }
    if (sport.includes("baseball")) {
      in1 = t.translate("baseball.gameStat1", "%s", String(stateObj.attributes.balls));
      in2 = t.translate("baseball.gameStat2", "%s", String(stateObj.attributes.strikes));
      in0 = t.translate("baseball.gameStat3", "%s", String(stateObj.attributes.outs));
      outsDisplay = 'inherit';
      timeoutsDisplay = 'none';
      basesDisplay = 'inherit';
    }

//
//  Soccer Specific Changes
//
    if (sport.includes("soccer")) {
      barLength[team] = stateObj.attributes.team_total_shots;
      barLength[oppo] = stateObj.attributes.opponent_total_shots;
      barLabel[team] = t.translate("soccer.teamBarLabel", "%s", stateObj.attributes.team_total_shots +'(' + stateObj.attributes.team_shots_on_target + ')');
      barLabel[oppo] = t.translate("soccer.oppoBarLabel", "%s", stateObj.attributes.opponent_total_shots +'(' + stateObj.attributes.opponent_shots_on_target + ')');
      timeoutsDisplay = 'none';
    }

//
//  Hockey Specific Changes
//
if (sport.includes("hockey")) {
  barLength[team] = stateObj.attributes.team_shots_on_target;
  barLength[oppo] = stateObj.attributes.opponent_shots_on_target;
  barLabel[team] = t.translate("hockey.teamBarLabel", "%s", String(stateObj.attributes.team_shots_on_target));
  barLabel[oppo] = t.translate("hockey.oppoBarLabel", "%s", String(stateObj.attributes.opponent_shots_on_target));

  timeoutsDisplay = 'none';
}

//
//  Volleyball Specific Changes
//
    if (sport.includes("volleyball")) {
      gameBar = t.translate("volleyball.gameBar", "%s", stateObj.attributes.clock);
      barLength[team] = stateObj.attributes.team_score;
      barLength[oppo] = stateObj.attributes.opponent_score;
      barLabel[team] = t.translate("volleyball.teamBarLabel", "%s", String(stateObj.attributes.team_score));
      barLabel[oppo] = t.translate("volleyball.oppoBarLabel", "%s", String(stateObj.attributes.opponent_score));
      timeouts[team] = stateObj.attributes.team_sets_won;
      timeouts[team] = stateObj.attributes.opponent_sets_won;
      timeoutsDisplay = 'inline';
    }

//
//  Basketball Specific Changes
//
    if (sport.includes("basketball")) {
      timeoutsDisplay = 'none';
      barDisplay = 'none';
      barWrapDisplay = "none";
    }

//
//  Tennis Specific Changes
//
    if (sport.includes("tennis")) {
      c.venue = stateObj.attributes.event_name;
      c.pre1 = t.translate("common.tourney" + stateObj.attributes.odds)
      in1 = c.pre1;
      c.finalTerm = stateObj.attributes.clock + " - " + gameDatePOST  + " (" + c.pre1 + ")";

      gameBar = t.translate("tennis.gameBar", "%s", stateObj.attributes.clock);
      barLength[team] = stateObj.attributes.team_score;
      barLength[oppo] = stateObj.attributes.opponent_score;
      if (stateObj.attributes.team_shots_on_target) {
        gameBar = t.translate("tennis.gameBar", "%s", stateObj.attributes.clock + "(tiebreak)");
        barLabel[team] = t.translate("tennis.teamBarLabel", "%s", stateObj.attributes.team_score +'(' + stateObj.attributes.team_shots_on_target + ')');
      }
      else {
        barLabel[team] = t.translate("tennis.teamBarLabel", "%s", String(stateObj.attributes.team_score));
      }
      if (stateObj.attributes.team_shots_on_target) {
        gameBar = t.translate("tennis.gameBar", "%s", stateObj.attributes.clock + "(tiebreak)");
        barLabel[oppo] = t.translate("tennis.oppoBarLabel", "%s", stateObj.attributes.opponent_score +'(' + stateObj.attributes.opponent_shots_on_target + ')');
      }
      else {
        barLabel[oppo] = t.translate("tennis.oppoBarLabel", "%s", String(stateObj.attributes.opponent_score ));
      }
      timeouts[team] = stateObj.attributes.team_sets_won;
      timeouts[oppo] = stateObj.attributes.opponent_sets_won;
      c.title = c.title || stateObj.attributes.event_name

      timeoutsDisplay = 'inline';
    }


//
//  MMA Specific Changes
//
    if (sport.includes("mma")) {
      c.title = c.title || stateObj.attributes.event_name;
      timeoutsDisplay = 'none';
      barDisplay = "none";
      barWrapDisplay = "none";
    }

//
//  Racing Specific Changes
//
    if (sport.includes("racing")) {
      c.title = c.title || stateObj.attributes.event_name;
      if (stateObj.attributes.quarter) {
        c.pre1 = stateObj.attributes.quarter;
        in1 = stateObj.attributes.quarter;
        stateObj.attributes.clock + " - " + gameDatePOST  + " (" + stateObj.attributes.quarter + ")";
      }
      timeoutsDisplay = 'none';

      barLength[team] = stateObj.attributes.team_total_shots;
      barLength[oppo] = stateObj.attributes.team_total_shots;
      barLabel[team] = t.translate("racing.teamBarLabel", "%s", String(stateObj.attributes.team_total_shots));
      barLabel[oppo] = t.translate("racing.teamBarLabel", "%s", String(stateObj.attributes.team_total_shots));

      if (stateObj.attributes.league.includes("NASCAR")) {
        c.logo[team] = null;
        c.logo[oppo] = null;
        c.initials[team] = "";
        c.initials[oppo] = "";
        if (c.name[team] && c.name[oppo]) {
          c.initials[team] = c.name[team].split(" ").map((n)=>n[0]).join("");
          c.initials[oppo] = c.name[oppo].split(" ").map((n)=>n[0]).join("");
          c.initialsDisplay = 'inline';
        }
      }
    }


//
//  Golf Specific Changes
//
    if (sport.includes("golf")) {
      c.title = c.title || stateObj.attributes.event_name;
      c.venue = stateObj.attributes.event_name;
      barLength[team] = stateObj.attributes.team_shots_on_target;
      barLength[oppo] = stateObj.attributes.opponent_shots_on_target;
      barLabel[team] = t.translate("golf.teamBarLabel", "%s", stateObj.attributes.team_total_shots +'(' + stateObj.attributes.team_shots_on_target + ')');
      barLabel[oppo] = t.translate("golf.oppoBarLabel", "%s", stateObj.attributes.opponent_total_shots +'(' + stateObj.attributes.opponent_shots_on_target + ')');
      c.finalTerm = stateObj.attributes.clock;
      timeoutsDisplay = 'none';
    }

    if (sport.includes("golf") || sport.includes("racing")) {
        if (Number(c.score[1]) < Number(c.score[2])) {
            c.scoreOp[1] = 1.0;
            c.scoreOp[2] = 0.6;
        }
        if (Number(c.score[2]) < Number(c.score[1])) {
          c.scoreOp[1] = 0.6;
          c.scoreOp[2] = 1.0;
        }
    }

//
//  Cricket Specific Changes
//
    if (sport.includes("cricket")) {
        var runs_substring = [];
        var runs = [];
        var total_runs = [];
        var subscores = [];
        var i = 0;

        timeoutsDisplay = 'none';
        barDisplay = "none";
        barWrapDisplay = "none";  

        in1 = stateObj.attributes.odds;
        in2 = stateObj.attributes.quarter;

        if (c.score != []) {
            if (c.score[1] || c.score[2]) {
                subscores[1] = c.score[1].split("(");
                subscores[2] = c.score[2].split("(");

                c.score[1] = subscores[1][0];
                c.score[2] = subscores[2][0];

                if (subscores[1].length > 1) {
                    c.record[1] = "(" + subscores[1][1];
                }
                if (subscores[2].length > 1) {
                    c.record[2] = "(" + subscores[2][1];
                }

                if (stateObj.state == 'POST') {
                    runs_substring[1] = c.score[1].split("/");
                    runs_substring[2] = c.score[2].split("/");

                    runs[1] = runs_substring[1][0].split("&");
                    runs[2] = runs_substring[2][0].split("&");

                    total_runs[1] = 0;
                    total_runs[2] = 0;

                    i = 0;
                    while (i < runs[1].length) {
                        total_runs[1] = total_runs[1] + Number(runs[1][i]);
                        i = i + 1;
                    }
                    i = 0;
                    while (i < runs[2].length) {
                        total_runs[2] = total_runs[2] + Number(runs[2][i]);
                        i = i + 1;
                    }

                    if (total_runs[1] > total_runs[2]) {
                        c.scoreOp[1] = 1.0;
                        c.scoreOp[2] = 0.6;
                    }
                    if (total_runs[1] < total_runs[2]) {
                        c.scoreOp[1] = 0.6;
                        c.scoreOp[2] = 1.0;
                    }
                }
            }
        }
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

    if (this._config.debug) {
        var lastUpdate = new Date (stateObj.attributes.last_update);
        var updateTime = lastUpdate.toLocaleTimeString(lang, { hour: '2-digit', minute:'2-digit', second:'2-digit'});

        c.title = this._config.entity + " " + c.title + "(";
        if (stateObj.attributes.api_message) {
          c.title = c.title + stateObj.attributes.api_message[0];
        }
        c.title = c.title + updateTime + ")";
    }




    if (stateObj.state == 'IN') {
        return html`
          <style>
            .card { position: relative; overflow: hidden; padding: 16px 16px 20px; font-weight: 400; border-radius: var(--ha-card-border-radius, 10px); }
            .title { text-align: center; font-size: 1.2em; font-weight: 500; }
            .team-bg { opacity: 0.08; position:absolute; top: -20%; left: -20%; width: 58%; z-index: 0; }
            .opponent-bg { opacity: 0.08; position:absolute; top: -20%; right: -20%; width: 58%; z-index: 0; }
            .card-content { display: flex; justify-content: space-evenly; align-items: center; text-align: center; position: relative; z-index: 1; }
            .team { text-align: center; width:35%; }
            .team img { max-width: 90px; }
            .circle { display:${c.initialsDisplay}; width: 90px; height: 90px; padding: 10px; line-height: 90px; border: 2px solid gray; border-radius: 50%; font-size: 40px; color: white; text-align: center; background: black }
            .possession, .possession1, .possession2 { font-size: 2.5em; text-align: center; opacity: 0; font-weight:900; }
            .possession1 {opacity: ${possessionOp[1]} !important; }
            .possession2 {opacity: ${possessionOp[2]} !important; }
            .score { font-size: ${c.scoreSize}; text-align: center; }
            .divider { font-size: 2.5em; text-align: center; margin: 0 4px; }
            .name { font-size: 1.4em; margin-bottom: 4px; }
            .rank { font-size:0.8em; display: ${c.rankDisplay}; }
            .line { height: 1px; background-color: var(--primary-text-color); margin:10px 0; }
            .timeouts { margin: 0 auto; width: 70%; display: ${timeoutsDisplay}; }
            .timeouts div.timeouts2:nth-child(-n + ${timeouts[2]})  { opacity: 1; }
            .timeouts div.timeouts1:nth-child(-n + ${timeouts[1]})  { opacity: 1; }
            .timeouts1 { height: 6px; border-radius: ${toRadius}px; border: ${clrOut}px solid ${outColor}; width: 20%; background-color: ${color[1]}; display: inline-block; margin: 0 auto; position: relative; opacity: 0.2; }
            .timeouts2 { height: 6px; border-radius: ${toRadius}px; border: ${clrOut}px solid ${outColor}; width: 20%; background-color: ${color[2]}; display: inline-block; margin: 0 auto; position: relative; opacity: 0.2; }
            .bases { font-size: 2.5em; text-align: center; font-weight:900; display: ${basesDisplay};}
            .on-first { opacity: ${onFirstOp}; display: inline-block; }
            .on-second { opacity: ${onSecondOp}; display: inline-block; }
            .on-third { opacity: ${onThirdOp}; display: inline-block; }
            .pitcher { opacity: 0.0; display: inline-block; }
            .status { text-align:center; font-size:1.6em; font-weight: 700; }
            .sub1 { font-weight: 700; font-size: 1.2em; margin: 6px 0 2px; }
            .sub1, .sub2, .sub3 { display: flex; justify-content: space-between; align-items: center; margin: 2px 0; }
            .last-play { font-size: 1.2em; width: 100%; white-space: nowrap; overflow: hidden; box-sizing: border-box; }
            .last-play p { display: inline-block; padding-left: 100%; margin: 2px 0 12px; animation : slide ${lastPlaySpeed}s linear infinite; }
            @keyframes slide { 0%   { transform: translate(0, 0); } 100% { transform: translate(-100%, 0); } }
            .clock { text-align: center; font-size: 1.4em; }
            .down-distance { text-align: right; }
            .play-clock { font-size: 1.4em; text-align: center; }
            .outs { text-align: center; display: ${outsDisplay}; }
            .bar-text { text-align: center; display: ${barDisplay}; }
            .bar-flex { width: 100%; display: flex; justify-content: center; margin-top: 4px; }
            .bar2-length { width: ${barLength[2]}%; background-color: ${color[2]}; height: 12px; border-radius: 0 ${probRadius}px ${probRadius}px 0; border: ${clrOut}px solid ${outColor}; border-left: 0; transition: all 1s ease-out; }
            .bar1-length { width: ${barLength[1]}%; background-color: ${color[1]}; height: 12px; border-radius: ${probRadius}px 0 0 ${probRadius}px; border: ${clrOut}px solid ${outColor}; border-right: 0; transition: all 1s ease-out; }
            .bar-wrapper { display: ${barWrapDisplay}; }
            .bar1-label { flex: 0 0 10px; padding: 0 10px 0 0; }
            .bar2-label { flex: 0 0 10px; padding: 0 0 0 10px; text-align: right; }
            .percent { padding: 0 6px; }
            .post-game { margin: 0 auto; }
          </style>
          <ha-card>
            <div class="card">
            <div class="title">${c.title}</div>
            <img class="team-bg" src="${c.logoBG[1]}" />
            <img class="opponent-bg" src="${c.logoBG[2]}" />
            <div class="card-content">
              <div class="team">
                <img src="${c.logo[1]}" />
                <div class="circle">${c.initials[1]}</div>
                <div class="name"><span class="rank">${c.rank[1]}</span> ${c.name[1]}</div>
                <div class="record">${c.record[1]}</div>
                <div class="timeouts">
                  <div class="timeouts1"></div>
                  <div class="timeouts1"></div>
                  <div class="timeouts1"></div>
                </div>
              </div>
              <div class="possession1">&bull;</div>
              <div class="score">${c.score[1]}</div>
              <div class="divider">&nbsp&nbsp&nbsp</div>
              <div class="score">${c.score[2]}</div>
              <div class="possession2">&bull;</div>
              <div class="team">
                <img src="${c.logo[2]}" />
                <div class="circle">${c.initials[2]}</div>
                <div class="name"><span class="rank">${c.rank[2]}</span> ${c.name[2]}</div>
                <div class="record">${c.record[2]}</div>
                <div class="timeouts">
                  <div class="timeouts2"></div>
                  <div class="timeouts2"></div>
                  <div class="timeouts2"></div>
                </div>
              </div>
            </div>
            <div class="play-clock">${playClock}</div>
            <div class="bases">
              <div class="on-second">&bull;</div>
            </div>
            <div class="bases">
              <div class="on-third">&bull;</div>
              <div class="pitcher"></div>
              <div class="on-first">&bull;</div>
            </div>
            <div class="outs">${in0}</div>
            <div class="line"></div>
            <div class="sub2">
              <div class="venue">${c.venue}</div>
              <div class="down-distance">${in1}</div>
            </div>
            <div class="sub3">
              <div class="location">${c.location}</div>
              <div class="network">${in2}</div>
            </div>
            <div class="line"></div>
            <div class="last-play">
              <p>${lastPlay}</p>
            </div>
            <div class="bar-text">${gameBar}</div>
            <div class="bar-wrapper">
              <div class="bar1-label">${barLabel[1]}</div>
              <div class="bar-flex">
                <div class="bar1-length"></div>
                <div class="bar2-length"></div>
              </div>
              <div class="bar2-label">${barLabel[2]}</div>
            </div>
          </div>
          </ha-card>
        `;
    }

    if (stateObj.state == 'PRE') {
      return renderPre(c);
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
}

customElements.define("teamtracker-card", TeamTrackerCard);

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

customElements.define("my-custom-card-editor", MyCustomCardEditor);