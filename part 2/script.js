"use strict";

let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
// if (hasDriverLicense) console.log(`I can drive :D`);

// const interface = "Audio";
// const private = 123;

function logger() {
  // console.log(`My name is Prabu`);
}

// calling / running / invoking function
// logger();

// function fruitProcessor(apple, oranges) {
//   const juice = `Juice with ${apple} apples and ${oranges} oranges`;
//   return juice;
// }

// console.log(apple, oranges);
// fruitProcessor(5, 2);
// return juice is function in fruitProcessing
// const juice = fruitProcessor(5, 2);
// console.log(juice);

// const orangeJuice = fruitProcessor(0, 4);
// console.log(orangeJuice);

// const num = Number("33");
// console.log(num);

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

// Arrow function
const calcAge3 = (birthYear) => 2030 - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2040 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// const yearRetirement = yearUntilRetirement(1999, "Jonas");
// console.log(yearRetirement);
// console.log(yearUntilRetirement(1991, "Bob"));
// console.log(yearUntilRetirement(1988, "Andy"));

// Function inside function

function cutFruitPieces(fruit) {
  return fruit * 5;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
  return juice;
}

console.log(fruitProcessor(3, 2));

// Reiviewing Function

const calculateAge = function (year) {
  return 2023 - year;
};

// const yearUntilRetirement = function (birthYear, firstName) {
//   const age = calculateAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has been retiring ✌`);
//     return -1;
//   }
// };

// yearUntilRetirement(1976, "Jonas");
// yearUntilRetirement(1955, "Mike");

const today = new Date();
const currentYear = today.getFullYear();
// console.log(currentYear);

// Array
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

// const friend = ["Michael", "Steven", "Peter"];
// console.log(friend);
// friend[2] = "Jay";
// friend = ["A", "B", "C"]; Cannot change entire array
// console.log(friend);

// const year = new Array(1999, 2009, 2019, 2023);
// console.log(year[3]);
// console.log(year[1]);
// console.log(year.length);
// console.log(year[year.length - 1]);

// const firstName = "Prabu";
// const prabu = [firstName, "Hadi", currentYear - 1999, "Developer", friend];
// console.log(prabu.length);

// Exercise
function calcAge(birthYear) {
  const age = 2023 - birthYear;
  return age;
}
const years = [1992, 1995, 1997, 1999, 2000, 2002];
// console.log(calcAge(years)); Wrong
const lineAge1 = calcAge(years[0]);
const lineAge2 = calcAge(years[1]);
const lineAge3 = calcAge(years[2]);
const lineAge4 = calcAge(years[years.length - 1]);
// console.log(lineAge1, lineAge2, lineAge3, lineAge4);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[2]),
  calcAge(years[years.length - 1]),
];
// console.log(ages);

// Add element
const friend = ["Michael", "Steven", "Peter"];
const newLength = friend.push("Jane", "Ane", "Olive");
console.log(newLength);

friend.unshift("Rodriges");

// Remove element
friend.pop(); // Last
const popped = friend.pop(); // Last
console.log(popped);
friend.shift();
console.log(friend);

console.log(friend.indexOf("Jane"));
console.log(friend.indexOf("Rodriges"));

console.log(friend.includes("Jane"));
console.log(friend.includes("Rodriges"));
friend.unshift(23);
console.log(friend.includes(23)); // include using strict equal

if (friend.includes("Peter")) {
  console.log(`You have friend names Peter`);
} else {
  console.log(`You don't have any friend names Peter`);
}
