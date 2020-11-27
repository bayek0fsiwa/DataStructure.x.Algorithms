let characters = [
    'a',
    'e',
    'i',
    'o',
    'u'
]

let findVowelOrConsonant = (str: string) => {
    if(characters.includes(str)){
       return true
    }else{
        return false
    }
}

let vowelOrConsonat = findVowelOrConsonant('a')
console.log(vowelOrConsonat);