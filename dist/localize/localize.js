import {en} from "./languages/en.js"
import {es} from "./languages/es.js"
import {pt_BR} from "./languages/pt_BR.js"

var languages = {
    en: en,
    es: es,
    pt_BR: pt_BR,
};

export function localize(string, search, replace) {
    if (search === void 0) { search = ''; }
    if (replace === void 0) { replace = ''; }
    var lang = (localStorage.getItem('selectedLanguage') || 'en').replace(/['"]+/g, '').replace('-', '_');
    var translated;
    try {
        translated = string.split('.').reduce(function (o, i) { return o[i]; }, languages[lang]);
    }
    catch (e) {
        try {
            translated = string.split('.').reduce(function (o, i) { return o[i]; }, languages['en']);
        }
        catch (e) {
            translated = '{' + string + '}';
        }
    }
    if ((translated === undefined) || (!(typeof translated === 'string') && !(translated instanceof String))) {
        translated = '{' + string + '}';
    }
    if (search !== '' && replace !== '') {
        translated = translated.replace(search, replace);
    }
    return translated;
}