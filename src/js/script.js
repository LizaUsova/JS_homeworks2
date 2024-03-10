'use strict';

//частина 1
let yearNowIs = new Date().getFullYear();
let userYearOfBirth = +prompt('Ваш рік народження?');


if (userYearOfBirth === null || userYearOfBirth === 0 || isNaN(userYearOfBirth)) {
    alert('Шкода, що Ви не захотіли ввести свій рік народженння');
} else {
    let age = yearNowIs - userYearOfBirth;
    let userNativeCity = prompt('В якому місті ви живите?');

    if (userNativeCity === null || userNativeCity === undefined || userNativeCity === "") {
        alert('Шкода, що Ви не захотіли ввести своє місто')
    } else {
        if (userNativeCity === 'Київ') {
            alert('Ваш вік ' + age + '\n' +
                'Ти живеш у столиці України');
        } else if (userNativeCity === 'Вашингтон') {
            alert('Ваш вік ' + age + '\n' +
                'Ти живеш у столиці Сполучених Штатів Америки');
        } else if (userNativeCity === 'Лондон') {
            alert('Ваш вік ' + age + '\n' +
                'Ти живеш у столиці Великої Британії');
        } else {
            alert('Ваш вік ' + age + '\n' +
                'Ти живеш у ' + userNativeCity);
        }
    }
}

// let userFavoriteSport = prompt('Ваш улюблений спорт?');
// if (userFavoriteSport === null) {
//     alert('Шкода, що Ви не захотіли ввести свій улюблений спорт')
// }












// частина 2


