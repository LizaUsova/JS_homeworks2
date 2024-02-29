'use strict';

const firstOperand = +prompt('Write the first operand');
const secondOperand = +prompt('Write the second operand');

if (!isNaN(firstOperand)) {
    alert('your first operand is ' + firstOperand);
} else {
        alert('Please enter a valid value or the first operand');
}

if (!isNaN(secondOperand)) {
    alert('your second operand is ' + secondOperand);
} else {
    alert('Please enter a valid value for the second operand');
}

const sumOfTotal = firstOperand + secondOperand;
const difference = firstOperand - secondOperand;
const product = firstOperand * secondOperand;
const quotient = firstOperand / secondOperand;

console.log('sum of total: ' + firstOperand + '+' + secondOperand + '=' + sumOfTotal);
console.log('difference: ' + firstOperand + '-' + secondOperand + '=' + difference);
console.log('product: ' + firstOperand + '*' + secondOperand + '=' + product);
console.log('quotient: ' + firstOperand + '/' + secondOperand + '=' + quotient);