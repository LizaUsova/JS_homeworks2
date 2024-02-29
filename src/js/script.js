'use strict';

const operator = prompt('Write one of the operators you want to use:\n add, sub, mult, div');
const firstOperand = +prompt('Write the first operand');
const secondOperand = +prompt('Write the second operand');

if (isNaN(firstOperand) || isNaN(secondOperand)) {
    alert('Please enter valid numerical operands');
}

if (operator === 'add') {
    alert((firstOperand) + '+' + (secondOperand) + '=' + (firstOperand + secondOperand));
} else if (operator === 'sub') {
    alert((firstOperand) + '-' + (secondOperand) + '=' + (firstOperand - secondOperand));
} else if (operator === 'mult') {
    alert((firstOperand) + '*' + (secondOperand) + '=' + (firstOperand * secondOperand));
} else if (operator === 'div') {
    alert((firstOperand) + '/' + (secondOperand) + '=' + (firstOperand / secondOperand));
} else {
    alert('Please enter valid information');
}