'use strict';

let a;

switch (true) {
    case a === 0:
        alert('вірно');
        break;
    case a > 0:
        alert('вірно');
        break;
    case a < 0:
        alert('вірно');
        break;
    default:
        alert('невірно');
}


switch (true) {
    case a >= 0:
        alert('вірно');
        break;
    case a <= 0:
        alert('вірно');
        break;
    default:
        alert('неправильно');
}


switch (true) {
    case a !== 0:
        alert('вірно');
        break;
    default:
        alert('невірно');
}


switch (true) {
    case a === 'test':
        alert('вірно');
        break;
    default:
        alert('неправильно');
}


switch (true) {
    case a === 1:
        alert('вірно');
        break;
    default:
        alert('невірно');
}


switch (true) {
    case a > 0 && a < 5:
        alert('вірно');
        break;
    default:
        alert('невірно');
}


switch (true) {
    case a === 0 || a === 2:
        alert (a += 7);
        break;
    default:
        alert(a / 10);
}


let b

switch (true) {
    case a <= 1 && b >= 3:
        alert(a + b);
        break
    default:
        alert(a - b)
}


switch (true) {
    case (a > 2 && a < 11) || (b >= 6 && b < 14):
        alert('вірно');
        break;
    default:
        alert('невірно')
}


const num = 1
let result;


switch (num) {
    case num === 1:
        result = 'зима';
        break;
    case num === 2:
        result = 'весна';
        break;
    case num === 3:
        result = 'літо';
        break;
    case num === 4:
        result = 'осінь';
        break;
    default:
        result = 'невідомий сезон';
}

alert(result);