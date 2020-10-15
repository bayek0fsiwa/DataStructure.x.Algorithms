let keywords = [
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
]

function findKeyWords(str){
    if(keywords.includes(str)){
        return true
    }else{
        return false
    }
}

let key = findKeyWords("let")
console.log(key);