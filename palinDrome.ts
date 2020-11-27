function palindrome(str: string){
    let pal = str.split('').reverse().join('')
    if (pal === str){
        return `The ${str} is a palindrome`
    } else{
        return `The ${str} is not a palindrome`
    }
}
let palin = palindrome('pop')
console.log(palin);