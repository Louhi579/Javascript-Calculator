let displayValue = '0';
let operand1 = null;
let operand2 = null;
let operator = null;
let result = null;
const buttons = document.querySelectorAll('button');

function operate(num1, operator, num2) {
    if(operator == '+') {
        return add(num1, num2);
    } else if(operator == '-') {
        return subtract(num1, num2);
    } else if(operator == '*') {
        return multiply(num1, num2);
    } else if(operator == '/') {
        return divide(num1, num2);
    } else {
        return 'ERROR'
    };
}

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};