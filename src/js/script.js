'use strict';

const arr = [1, 2, 3, 4, 5];

//1
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log('Сума елементів масиву: ', sum);


//2
let sumSquare = 0;
for (let x = 0; x < arr.length; x++) {
    sumSquare += arr[x] ** 2;
}

console.log('Сума квадратів елементів масиву: ', sumSquare);