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
