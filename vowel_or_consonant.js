let characters = [
    'a',
    'e',
    'i',
    'o',
    'u'
]

function findVowelOrConsonat(str){
    if(characters.includes(str)){
       return true
    }else{
        return false
    }
}

let vowel_or_consonant = findVowelOrConsonat('a')
console.log(vowel_or_consonant);