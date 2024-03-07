'use strict';

const firstNumber = parseFloat(prompt('Write the first number'));
const secondNumber = parseFloat(prompt('Write the second number'));
const thirdNumber = parseFloat(prompt('Write the third number'));

const arithmeticMean = (firstNumber+secondNumber+thirdNumber) / 3;

if (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber)) {
    alert('Please write the correct operand value');
} else {
    alert('Your arithmetic mean is ' + arithmeticMean.toFixed(2))}