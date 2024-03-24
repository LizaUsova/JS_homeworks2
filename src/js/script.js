'use strict';

//task 1

const arr = ['a', 'b', 'c', 'd'];
const arr1 = arr.slice(0, 2).join('+');
const arr2 = arr.slice(2).join('+');

const newArr = arr1 + ', ' + arr2;

//task 2
const arr3 = [2, 5, 3, 9];
const result = arr3[0] * arr3[1] + arr3[2] * arr3[3];

//task 3
const arr4 = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
document.write(arr4[1][0]);

//task 4
const obj = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
}

const firstEl = obj.js[0];

//task 5
const array = [];
for (let i = 1; i <= 5; i++) {
    array.push('x'.repeat(i));
}


//task 6
const array2 = [];
for (let i = 1; i <= 5; i++) {
    array2.push(String(i).repeat(i));
}

//task 7
function arrayFill(value, length) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(value);
    }
    return array;
}

//task 8
const arr6 = [2, 3, 8, 5];
let sum = null;
let count = null;

for (let i = 0; i < arr6.length; i++) {
    sum += arr6[i];
    count++;

    if (sum > 10) {
        break;
    }
}

//task 9
const arr7 = [1, 2, 3, 4, 5, 6, 7];
arr7.reverse()

//task 10
const arr8 = [[1, 2, 3], [4, 5], [6]];

const totalSum = arr8.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.reduce(function(subAccumulator, subCurrentValue) {
        return subAccumulator + subCurrentValue;
    }, 0);
}, 0);

// task 11
const arr9 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
const resultArr9 = arr9.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.reduce(function(subAccumulator, subCurrentValue) {
        return subAccumulator + subCurrentValue.reduce(function(innerSubAccumulator, innerSubCurrentValue) {
            return innerSubAccumulator + innerSubCurrentValue;
        }, 0);
    }, 0);
}, 0);

console.log(resultArr9)