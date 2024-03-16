'use strict';

const userInputNumber = +prompt('Введіть число');
const userInputDegreeOfNumber = +prompt('У яку ступінь піднести?');

function degreeNumber(userInputNumber, userInputDegreeOfNumber = 1) {
    if (isNaN(userInputDegreeOfNumber) || isNaN(userInputNumber)) {
        alert('Будь ласка, введіть числові значення');
        return;
    }

    return Math.pow(userInputNumber, userInputDegreeOfNumber);
}

const result = degreeNumber(userInputNumber, userInputDegreeOfNumber);
if (result !== undefined) {
    alert('Результат: ' + result);
}