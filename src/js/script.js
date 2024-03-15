'use strict';

const number =+prompt('Введіть число');

if (number < 1 || isNaN(number)) {
    console.log('NaN');
} else {
    let divisor = 2;

    while (number % divisor !== 0) {
        divisor++;
    }

    console.log('Найменший дільник числа: ', divisor);
}