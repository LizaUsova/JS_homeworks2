'use strict';

/*1*/
for (let i = 10; i <= 20; i++) {
    document.write (i + ', ');
}

/*2*/
for (let a = 10; a <= 20; a++) {
   document.write (Math.pow(a, 2) + ", ");
}

/*3*/
for (let c = 0; c <= 10; c++) {
    document.write('7*' + c + '=' + 7 * c + '; \n')
}

/*4*/
let suma = 0;
for (let d = 1; d < 16; d++) {
    suma += d;
}

document.write(suma);

/*5*/
let f = BigInt(1);
for (let g = 15; g < 36; g++) {
    f *= BigInt(g);
}

document.write('Добуток усіх цілих чисел від 15 до 35: ' + f);

/*6*/
let sum = 0;
for (let h = 1; h <= 500; h++) {
    sum += h;
}
let average = sum / 500;
document.write('Середнє арифметичне всіх цілих чисел від 1 до 500: ' + average);

/*7*/
for (let k = 30; k <=80; k++) {
    if (k % 2 === 0) {
        document.write(k + ', ');
    }
}

/*8*/
for (let l = 102; l <=200; l += 3) {
        document.write(l + ', ');
}

/*9, 10, 11*/
const number = 36;
const divisors = [];
let sumOfEvenDivisors = 0;

for (let m = 1; m <= number; m++) {
    if (number % m === 0) {
        divisors.push(m);
        if (m % 2 === 0) {
            sumOfEvenDivisors += m;
        }
    }
}

document.write('всі дільники числа ' + number + ': ' + divisors.join(', ') + '<br>');
document.write('кількість дільників: ' + divisors.length + '<br>');
document.write('Сума парних дільників: ' + sumOfEvenDivisors);

/*12*/
