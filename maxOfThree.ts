let max = (num1: number, num2: number, num3: number): number => {
    if (num1 > num2 && num1 > num3){
        return num1;
    } else if (num2 > num1 && num2 > num3){
        return num2;
    }else {
        return num3;
    }
}

let maxNumber = (max(100, 200, 300));
console.log(maxNumber);
