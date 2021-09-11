//temperature value in kelvin;
const kelvin = 0;
//converting kelvin to celsius
const celsius = kelvin - 273;
//changing from celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//converting the value to an interger;
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
//converting from celsius to Newton
let Newton = celsius * (33/100);
Newton = Math.floor(Newton);
console.log(`The temperature is ${Newton} degrees Newton`);