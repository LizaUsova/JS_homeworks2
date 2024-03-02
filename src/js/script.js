'use strict';

/* task 1 */
const user = {};

user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

/* task 2
Так, можна змінити властивості об'єкта оголошеного за допомогою const,
тому що змінюємо його властивості, а не саму змінну. Адже object - це посилальний тип даних. */

/* task 3 */

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(sum);
