
module.exports = function detectLang(text) {
    if (/^[\u0600-\u06FF\s]+$/.test(text)) return 'ur';
    if (/^[\u0900-\u097F\s]+$/.test(text)) return 'hi';
    return 'en';
};
