'use strict';

const userNumber = prompt('Введіть число:');
const number = parseFloat(userNumber);

if (!isNaN(number)) {
    let pluralForm;
    if (number === 1) {
        pluralForm = 'рік';
    } else if (number > 1 && number < 5) {
        pluralForm = 'роки';
    } else {
        pluralForm = 'років';
    }
    alert(number + ' ' + pluralForm);
} else {
    alert('Це не число');
}