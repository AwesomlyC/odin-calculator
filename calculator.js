console.log("Working...");


let num1;
let operator;
let num2;
// Basic Functionalities
function add(num1, num2){

    return num1 + num2;
}

function subtract(num1, num2){

    return num1 - num2;
}

function multiply(num1, num2){

    return num1 * num2;
}


function divide(num1, num2){

    if (num2 === 0){
        return "undefine"  // undefine
    }
    return num1 / num2;
}

function operate(num1, operator, num2){

    switch (operator){
        case "+":
            let sum = add(num1, num2);
            console.log(sum);
            break;
        case "-":
            let difference = subtract(num1, num2);
            console.log(difference);
            break;
        case "*":
            let total = multiply(num1, num2);
            console.log(total);
            break;
        case "/":
            let divison = divide(num1, num2);
            console.log(divison);
            break;
    }
}


// Testing...
console.log("Testing sum...");
operate(5,"+", 2)
operate(0,"+", 2)

operate(1,"+", 2)

operate(1000,"+", 2)

console.log("Testing subtraction...");
operate(5,"-", 2)
operate(1,"-", 2)
operate(0,"-", 2)
operate(-4,"-", 2)
operate(4,"-", -2)

console.log("Testing multiply...");
operate(5, "*", 5);
operate(0, "*", 5);

operate(-1, "*", 5);

operate(50000, "*", 5);


console.log("Testing divison...");
operate(100,"/", 2)
operate(23,"/", 5)
operate(-9,"/", 2)
operate(1000,"/", 0)
