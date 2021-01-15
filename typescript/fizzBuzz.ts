let fizzBuzz = (num): number => {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else if (i % 3 && i % 5 === 0) {
            console.log("fizzbuzz");
        }
    }
    return 
}

let num = fizzBuzz(100)
console.log(num);