'use strict';

/*1*/
for (let i = 10; i <= 20; i++) {
    document.write (i + ', ');
}

/*2*/
for (let i = 10; i <= 20; i++) {
   document.write (Math.pow(i, 2) + ", ");
}

/*3*/
for (let i = 0; i <= 10; i++) {
    document.write('7*' + i + '=' + 7 * i + '; \n')
}

/*4*/
let sum = 0;
for (let i = 1; i < 16; i++) {
    sum += i;
}

document.write(sum);

/*5*/
let a = BigInt(1);
for (let i = 15; i < 36; i++) {
    a *= BigInt(i);
}

document.write('Добуток усіх цілих чисел від 15 до 35: ' + a);

/*6*/
let sum = 0;
for (let i = 1; i <= 500; i++) {
    sum += i;
}
let average = sum / 500;
document.write('Середнє арифметичне всіх цілих чисел від 1 до 500: ' + average);

/*7*/
for (let i = 30; i <=80; i++) {
    if (i % 2 === 0) {
        document.write(i + ', ');
    }
}

/*8*/
for (let i = 102; i <=200; i += 3) {
        document.write(i + ', ');
}

/*9*/
const number = 36;
const divisors = [];

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        divisors.push(i);
    }
}

document.write("всі дільники числа " + number + ": " + divisors.join(", ") + '<br>');
document.write("кількість дільників: " + divisors.length);


/*10*/
