'use strict';

const temperatureValue = +prompt('Write the temperature value to convert');
const celsiusOrFahrenheit = prompt('Write C if you want to convert to Celsius\nWrite F if you want to convert to Fahrenheit');


if (celsiusOrFahrenheit === 'F' || celsiusOrFahrenheit === 'f') {
    alert('Your result is ' + (temperatureValue * 9 / 5 + 32));
}
else if (celsiusOrFahrenheit === 'C' || celsiusOrFahrenheit === 'c') {
    alert('Your result is ' + (temperatureValue - 32) * 5 / 9);
}
