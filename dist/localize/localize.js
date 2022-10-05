import {en} from "./languages/en.js"

var languages = {
    en: en,
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
        translated = string.split('.').reduce(function (o, i) { return o[i]; }, languages['en']);
    }
    if (translated === undefined)
        translated = string.split('.').reduce(function (o, i) { return o[i]; }, languages['en']);
    if (search !== '' && replace !== '') {
        translated = translated.replace(search, replace);
    }
    return translated;
}