var keywords = [
    "break",
    "case",
    "continue",
    "default",
    "defer",
    "else",
    "for",
    "function",
    "goto",
    "if",
    "map",
    "range",
    "return",
    "struct",
    "type",
    "elif",
    "else",
    "var",
    "super",
    "self",
    "private",
    "public",
    "let",
    "const"
];
var Keyword = function (str) {
    if (keywords.includes(str)) {
        return true;
    }
    else {
        return false;
    }
};
var key = Keyword("else");
console.log(key);
