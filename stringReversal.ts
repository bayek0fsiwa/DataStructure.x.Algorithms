// let reversedString: string = "apple"
// console.log(reversedString.split('').reverse().join(''))

let reverseString = (str) => {
    return str.split('').reverse().join('')
}

let rev = reverseString("apple");
console.log(rev);