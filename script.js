/*
let js = "amazing";
//if (js === "amazing") alert("Javascript is FUN!");

console.log(40 + 69 + 33 - 22);
console.log(33);
console.log("Matilda");

let firstName = "Prabu";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let number = 3;
console.log(number);
// Reserve js new, function, name
// modify it using (_) or ($)
let PI = 3.1415;
console.log(PI);

//using more descriptive var name
let myFirstJob = "Programming";
let myCurrentJob = "Coder";

console.log(myCurrentJob);
*/

/*
let javascriptIsFun = true;
console.log(typeof javascriptIsFun);

// console.log(typeof false);
// console.log(typeof 23);
// console.log(typeof "Prabu");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let person;
person = "female";
console.log(person);
console.log(typeof person);

// Error in Javascript
let test = null;
console.log(test);
console.log(typeof test);
*/

/*
let age = 23;
age = 24;
console.log(age);

const gender = "male";
// gender = "female";
// const price; ERROR

var job = "programmer";
job = "bouncher";
*/

// Math Operator
const now = 2035;
const agePrabu = now - 1999;
const ageSarah = now - 2009;
/*
console.log(agePrabu, ageSarah);
console.log(agePrabu * 2, ageSarah / 2, 2 ** 3);
// 2 ** 3 means 2 to the power to 3 = 2*2*2

const firstName = "Prabu";
const lastName = "Hadi";
console.log(firstName + " " + lastName);

// Assignments Operator
let x = 22 + 33; // 55
x += 10; // x = x + 10
x += 5;
x++;
x--;
console.log(x);

// Comparison Operator
console.log(agePrabu > ageSarah);
console.log(agePrabu === ageSarah);
console.log(ageSarah > agePrabu);
console.log(ageSarah >= 20);
// >, <. >=, <=

const isAdult = ageSarah >= 18;
console.log(isAdult);
*/

/*
// Operator Precedence
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // subtraction comes first
console.log(x, y);

const averageAge = (agePrabu + ageSarah) / 2;
console.log(agePrabu, ageSarah, averageAge);
*/

const firstName = "Prabu";
const job = "Developer";
const birthYear = 1999;
const year = 2023;

const prabu =
  "Helloo. I'm " +
  firstName +
  ", a " +
  (year - birthYear) +
  " years old " +
  job +
  "!";
console.log(prabu);

// Template Literal
const prabuNew = `Helloo, I'm ${firstName}, a ${
  year - birthYear
} years old ${job}!`;
console.log(prabuNew);

console.log(`This is just regular string...`);

console.log(
  "This is \n\
String \n\
With \n\
Multiple \n\
Line"
);

console.log(`This
is
String
With
Multiple
Line`);

// Decision State
const age = 16;
const isLegal = age >= 18;

if (isLegal) {
  console.log("Stella can buy alcohol ✔"); // WIndows + . = Win, CMD + CRTL + SPACE = Mac
} else {
  const yearsLeft = 18 - age;
  console.log(`Stella should study more 👍 for ${yearsLeft} year more`);
}

let century;
if (birthYear >= 2000) {
  century = 21;
} else {
  century = 20;
}
console.log(century);
