const celsiusToFahrenheit = celsius => Number((celsius * 9 / 5 + 32).toFixed(2));
const fahrenheitToCelsius = fahrenheit => Number(((fahrenheit - 32) * 5 / 9).toFixed(2));
console.log(`25 C is ${celsiusToFahrenheit(25)} F`);
console.log(`98.6 F is ${fahrenheitToCelsius(98.6)} C`);
const converter = ({unit , value}) => {
    if (unit === 'C'){
        return value*9/5+32;
    }
    else if (unit === 'F'){
        return (value-32)*5/9;
    }
    else{
        return {error: 'Invalid Unit'}
    }
};
console.log(converter({unit: 'F' , value: 98.6}))
console.log(converter({value: 25 , unit: 'C'}))