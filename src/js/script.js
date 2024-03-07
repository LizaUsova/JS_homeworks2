'use strict';

const firstNumber = parseFloat(prompt('Write the first number'));
const secondNumber = parseFloat(prompt('Write the second number'));

const sumOfTotal = firstNumber + secondNumber;
const difference = firstNumber - secondNumber;
const product = firstNumber * secondNumber;
const quotient = firstNumber / secondNumber;

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert('\'Please write the correct operand value');
} else {
    alert(firstNumber + '+' + secondNumber + '=' + sumOfTotal + '\n' +
        firstNumber + '-' + secondNumber + '=' + difference + '\n' +
    firstNumber + '*' + secondNumber + '=' + product + '\n' +
    firstNumber + '/' + secondNumber + '=' + quotient);
}
