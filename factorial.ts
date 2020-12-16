// Recursive Function
function factorial(x: number){
    if(x === 0){
        return 1
    }
    return x * factorial(x - 1)
}

// Iterative Function 
function fact(num: number){
    let val = 1
    for(let i = 2; i <= num; i++){
        val *= i
        return val
    }
}