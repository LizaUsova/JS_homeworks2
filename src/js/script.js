'use strict';

//task 1 - Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

let newArr = arr1.concat(arr2);

//task 2 - Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
const arr3 = [1, 2, 3];
arr3.reverse();

//task 3 - Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
const arr4 = [1, 2, 3];
arr4.push(4,5,6);

//task 4 - Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
const arr5 = [1, 2, 3];
arr5.unshift(4, 5, 6)

//task 5 - Дан массив ['js',"css', 'jq']. Выведите на экран первый элемент.
const arr6 = ['js', 'css', 'jq'];
document.write(arr6 [0]);

//task 6 - Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
const arr7 = ['js', 'css', 'jq'];
document.write(arr7[arr7.length -1]);

//task 7 - Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [1, 2, 3].
const arr8 = [1, 2, 3, 4, 5];
const arr8Cop = arr8.slice(0, 3)

//task 8 - Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [4, 5].
const arr9 = [1, 2, 3, 4, 5];
const arr9Cop = arr9.slice(-2);

//task 9 - Дан массив [1, 2, 3, 4, 5]. С помощью метода преобразуйте массив в [1, 4, 5].
const arr10 = [1, 2, 3, 4, 5];
arr10.splice(1, 2);

//task 10 - Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [2, 3, 4].
const arr11 = [1, 2, 3, 4, 5];
const arr11Cop = arr11.slice(1,4);

//task 11 - Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
const arr12 = [1, 2, 3, 4, 5];
arr12.splice(3, 0,'a','b','c');

//task 12 - Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const arr13 = [1, 2, 3, 4, 5];
arr13.splice(1, 0, 'a', 'b');
arr13.splice(6, 0, 'c');
arr13.push('e');

//task 13 - Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
const arr14 = [3, 4, 1, 2, 7];
arr14.sort();

//task 14 - Дан массив с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел.
const numbers = [5, 6, 7, 8, 9];
const sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

//task 15 - Дан массив с числами [5, 6, 7, 8, 9]. Сделайте из него массив, состоящий из квадратов этих чисел.
const numbers1 = [5, 6, 7, 8, 9];
const square = numbers.map(
    function (num1) {
        return num1 * num1;
    }
)

//task 16 - Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только отрицательные числа.
const numbers2 = [1,-3, 5, 6,-7, 8, 9,-11];
const negativeNumbers2 = numbers2.filter(function(num) {
    return num < 0;
});

//task 17 - Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только четные числа.
const numbers3 = [1,-3, 5, 6,-7, 8, 9,-11];
const evenNumbers = numbers3.filter(function(num) {
    return num % 2 === 0;
});

//task 18 - Дан массив со строками ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az']. Оставьте в нем только те строки, длина которых больше 5-ти символов.
const arrStrings = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const filteredStrings = arrStrings.filter(function(str) {
    return str.length > 5;
});

//task 19 - Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.
const arrays = [1, 2, [3, 4], 5, [6, 7]];
const subarrays = arrays.filter(function(element) {
    return Array.isArray(element);
});

//task 20 - Дан массив с числами [5,-3, 6,-5, 0,-7, 8, 9]. Посчитайте количество отрицательных чисел в этом массиве.
const numbers4 = [5,-3, 6,-5, 0,-7, 8, 9];
const negativeNumbers4 = numbers4.filter(function(num) {
    return num < 0;
});

console.log(negativeNumbers4.length)