"use strict";

let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log(`I can drive :D`);

// const interface = "Audio";
// const private = 123;

function logger() {
  console.log(`My name is Prabu`);
}

// calling / running / invoking function
logger();

function fruitProcessor(apple, oranges) {
  const juice = `Juice with ${apple} apples and ${oranges} oranges`;
  return juice;
}

// console.log(apple, oranges);
// fruitProcessor(5, 2);
// return juice is function in fruitProcessing
const juice = fruitProcessor(5, 2);
console.log(juice);

const orangeJuice = fruitProcessor(0, 4);
console.log(orangeJuice);

const num = Number("33");
console.log(num);

// simplified functino declaration
const age1 = calcAge(1999);
function calcAge(birthYear) {
  return 2023 - birthYear;
}

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;
//   return age;
// }

const myAge = calcAge(1999);
// console.log(myAge);

// anonymous function expression
const calcAge2 = function (birthYear) {
  return 2028 - birthYear;
};
// console.log(calcAge2(1999));

const age2 = calcAge2(1999);

console.log(age1, age2);
