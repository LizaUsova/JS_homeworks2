'use strict';

//частина 1
const yearNowIs = new Date().getFullYear();
const userYearOfBirth = +prompt('Ваш рік народження?');


if (userYearOfBirth === null || userYearOfBirth === 0 || isNaN(userYearOfBirth)) {
    alert('Шкода, що Ви не захотіли ввести свій рік народженння');
} else {
    const age = yearNowIs - userYearOfBirth;
    const userNativeCity = prompt('В якому місті ви живите?');

    if (userNativeCity === null || userNativeCity === undefined || userNativeCity === '') {
        alert('Шкода, що Ви не захотіли ввести своє місто')
    } else {
        let cityMessage;
        if (userNativeCity === 'Київ') {
            cityMessage = 'столиці України';
        } else if (userNativeCity === 'Вашингтон') {
            cityMessage = 'столиці Сполучених Штатів Америки';
        } else if (userNativeCity === 'Лондон') {
            cityMessage = 'столиці Великої Британії';
        } else {
            cityMessage = userNativeCity;
        }


        const userFavoriteSport = prompt('Ваш улюблений спорт?');

        if (userFavoriteSport === null || userFavoriteSport === '') {
            alert('Шкода, що Ви не захотіли ввести свій улюблений спорт');
        } else {
            let sportMessage;
            if (userFavoriteSport === 'футбол') {
                sportMessage = 'Роналдо';
            } else if (userFavoriteSport === 'баскетбол') {
                sportMessage = 'Майл Джордан';
            } else if (userFavoriteSport === 'формула 1') {
                sportMessage = 'Михайло Шумахер';
            } else {
                sportMessage = 'професійний спортсмен';
            }

            alert('Ваш вік ' + age + '\n' +
                'Ви живете у ' + cityMessage + '\n' +
                'Ваш улюблений спорт - ' + userFavoriteSport + '. Хочеш стати як ' + sportMessage + '?');
        }
    }
}












// частина 2


