// let reversedString: string = "apple"
// console.log(reversedString.split('').reverse().join(''))
var reverseString = function (str) {
    return str.split('').reverse().join('');
};
var rev = reverseString("apple");
console.log(rev);
