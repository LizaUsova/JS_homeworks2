'use strict';

//1
const x = 10;
const y = 7;

const compare = x > y ? 'x більше за y' : 'x не більше, ніж y';
console.log(compare);

//3
const userNumber = prompt('ввести ціле число');
const numberLength = userNumber.length;
const num = parseInt(userNumber);


if (!isNaN(num)) {
    if (num > 0) {
        if (numberLength === 1) {
            alert('Число ' + num + ' є однозначним позитивним');
        } else if (numberLength === 2) {
            alert('Число ' + num + ' є двозначним позитивним');
        } else {
            alert('Число ' + num + ' є трьохзначним або більше позитивним');
        }
    } else if (num < 0) {
        if (numberLength === 2) {
            alert('Число ' + num + ' є двозначним негативним');
        } else {
            alert('Число ' + num + ' є трьохзначним або більше негативним');
        }
    } else {
        alert('Ви ввели нуль');
    }
} else {
    alert('Введено не число');
}

//4
const firstNumber = +prompt('Введите перше число');
const secondNumber = +prompt('Введите друге число');
const thirdNumber = +prompt('Введите третє число');

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    alert('Найбільше з введених чисел є ' + firstNumber);
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    alert('Найбільше з введених чисел є ' + secondNumber);
} else if (thirdNumber > firstNumber && thirdNumber >secondNumber) {
    alert('Найбільше з введених чисел є ' + thirdNumber);
} else {
    alert('ви не ввели жодного числа')
}



//5
const a = +prompt('введите довжина для сторона "а" трикутника');
const b = +prompt('введите довжина для сторона "b" трикутника');
const c = +prompt('введите довжина для сторона "c" трикутника');

if ((a+b) > c || (c+b) > a || (a+c) > b) {
    alert('з такими довжинами тиркунтик може існувати')
} else {
    alert('з такими довжинами тиркунтик НЕ може існувати')
}