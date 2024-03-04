console.log("Working...");


let num1;
let operator = "";
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
    console.log("num1: " + num1 + " ... operator: " + operator + " ... num2: " + num2);
    let result;
    switch (operator){
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
    }
    return result;
}

function modifyText(value){
    let display = document.querySelector(".text");
    // let currentText = display.textContent;

    if (value === "+" || value === "-" || value === "*" || value === "/"){
        if (operator !== ""){
            calculateResult();
        }
        operator = value;
        console.log("operator is set to: " + operator);
    }
    display.textContent += value;
    console.log(display.textContent);
}

function calculateResult(){
    let display = document.querySelector(".text");
    let text = display.textContent;
    console.log("The operator to be used is ... " + operator)

    let parsedText = text.split(operator);
    result = operate(parseInt(parsedText[0]), operator, parseInt(parsedText[1]));

    display.textContent = result;
    operator="";

}

function clearResult(){
    document.querySelector(".text").textContent = "";
    operator = ""; 
}



// Testing...
// console.log("Testing sum...");
// operate(5,"+", 2)
// operate(0,"+", 2)

// operate(1,"+", 2)

// operate(1000,"+", 2)

// console.log("Testing subtraction...");
// operate(5,"-", 2)
// operate(1,"-", 2)
// operate(0,"-", 2)
// operate(-4,"-", 2)
// operate(4,"-", -2)

// console.log("Testing multiply...");
// operate(5, "*", 5);
// operate(0, "*", 5);

// operate(-1, "*", 5);

// operate(50000, "*", 5);


// console.log("Testing divison...");
// operate(100,"/", 2)
// operate(23,"/", 5)
// operate(-9,"/", 2)
// operate(1000,"/", 0)
