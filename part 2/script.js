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

const ages2 = calcAge2(1999);

// console.log(age1, age2);

// Arrow function
const calcAge3 = (birthYear) => 2030 - birthYear;
const age3 = calcAge3(1999);
// console.log(age3);

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

// console.log(fruitProcessor(3, 2));

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
//     console.log(`${firstName} has been retiring ???`);
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

// Array = use when have ordered value, retrieve value based on number squaence
// Add element
const friend = ["Michael", "Steven", "Peter"];
const newLength = friend.push("Jane", "Ane", "Olive"); // Adding Last
// console.log(newLength);
friend.unshift("Rodriges"); // Adding First

// Remove element
friend.pop(); // Remove Last
const popped = friend.pop(); // Remove Last
// console.log(popped);
friend.shift(); // Remove First
// console.log(friend);

// console.log(friend.indexOf("Jane"));
// console.log(friend.indexOf("Rodriges"));

// console.log(friend.includes("Jane"));
// console.log(friend.includes("Rodriges"));
friend.unshift(23);
// console.log(friend.includes(23)); // include using strict equal

// if (friend.includes("Peter")) {
//   console.log(`You have friend names Peter`);
// } else {
//   console.log(`You don't have any friend names Peter`);
// }

// Object = use at unordered list, retrieve value based on name
// has 5 key pairs, each key has value, each key can define as property
// property of firstname with value prabu
// const prabu = {
//   firstName: "Prabu",
//   lastName: "Hadi",
//   age: currentYear - 1999,
//   job: "Web Developer",
//   friends: ["Moona", "Kaela", "Zeta"],
// };

// Dot and bracket Notation
// console.log(prabu.lastName);
// console.log(prabu["lastName"]);

const nameKey = "Name";
// console.log(prabu["first" + nameKey]);
// console.log(prabu["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Prabu? Choose between firstName, lastName, age, job and friends"
// );
// // console.log(prabu[interestedIn]);

// if (prabu[interestedIn]) {
//   console.log("Get to know : " + prabu[interestedIn]);
// } else {
//   console.log(
//     `Please choose between firstName, lastName, age, job and friends`
//   );
// }

// prabu.location = "Indonesia";
// prabu["twitter"] = "@purippu2233";
// // console.log(prabu);

// Challange
// "Prabu has 3 friends, and his best friend is called Kaela"

// Basic Approach
// console.log(prabu.firstName);
// console.log(prabu.friends.length);
// console.log(prabu.friends[0]);

// console.log(
//   prabu.firstName +
//     ` has ` +
//     prabu.friends.length +
//     ` friends, and his best friend is called ` +
//     prabu.friends[0]
// );

// Effective way
// console.log(
//   `${prabu.firstName} has ${prabu.friends.length} friends, and his best friend is called ${prabu.friends[1]}`
// );

// Object Method
const prabu = {
  firstName: "Prabu",
  lastName: "Hadi",
  birthYear: 1999,
  job: "Web Developer",
  friends: ["Moona", "Kaela", "Zeta"],
  hasDriverLicense: true,

  // calcAge: function (birthYear) {
  //   return currentYear - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return currentYear - this.birthYear;
  // },

  calcAge: function () {
    this.age = currentYear - this.birthYear;
    return this.age;
  },

  getSummery: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license`;
  },
};

// console.log(prabu.calcAge());

// console.log(prabu.age);
// console.log(prabu.age);
// console.log(prabu.age);

// console.log(prabu["calcAge"](1991));

// Challange
// "Prabu is a 24-years old developer, and he has a driver's license"

console.log(prabu.getSummery());

// console.log(
//   `${prabu.firstName} is a ${prabu.age}-years old ${prabu.job}, and he has ${
//     prabu.hasDriverLicense ? "a" : "no"
//   } driver's license`
// );

// Loop Iteration
// for loops keeps running while condition is TRUE (3 condition) counter
// loop statement has 3 parts (initial value, logical condition boolean, increase initial value)
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} ????????????????`);
// }

// Loop Array
// const prabuArray = [
//   "Prabu",
//   "Hadi",
//   currentYear - 1999,
//   "Developer",
//   ["Kaela", "Moona", "Zeta"],
//   true,
// ];
// console.log(prabuArray);

// console.log(prabuArray[0]);
// console.log(prabuArray[1]);
// ...
// console.log(prabuArray[4]);
// console.log(prabuArray[5]); is not exist

// create empty array
const types = [];

// for (let i = 0; i < prabuArray.length; i++) {
//   // Reading from prabuArray
//   console.log(prabuArray[i], typeof prabuArray[i]);

//   // Filling types array
//   // types[i] = typeof prabuArray[i];
//   types.push(typeof prabuArray[i]);
// }
console.log(types);

// types[0]='string'
// types[1]='string'
// types[2]='number'

const year4 = [1991, 1999, 2007, 2022];
const age4 = [];

for (let i = 0; i < year4.length; i++) {
  age4.push(2037 - year4[i]);
}
console.log(age4);

// loop continue and break
// console.log(`===== ONLY STRING =====`);
// for (let i = 0; i < prabuArray.length; i++) {
//   if (typeof prabuArray[i] !== "string") continue;

//   console.log(prabuArray[i], typeof prabuArray[i]); // this code not even reach because continue
// }

// console.log(`===== BREAK WITH NUMBER =====`);
// for (let i = 0; i < prabuArray.length; i++) {
//   if (typeof prabuArray[i] === "number") break;

//   console.log(prabuArray[i], typeof prabuArray[i]); // this code not even reach because break
// }

// Loop Backwards
const prabuArray = [
  "Prabu",
  "Hadi",
  currentYear - 1999,
  "Developer",
  ["Kaela", "Moona", "Zeta"],
  true,
];

// 0, 1, 2, ... 4
// 4, 3, ... 0

// for (let i = prabuArray.length - 1; i >= 0; i--) {
//   // increment (++) decrement (--)
//   console.log(i, prabuArray[i]);
// }

// Loop inside loop
// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`---------- Starting Exercise ${exercise}`);

//   for (let rep = 0; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} ????????????????`);
//   }
// }

// While Loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} ????????????????`);
// }

// while loop need true condition to stay run
// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weight repetition ${rep} ????????????????`);
//   rep++;
// }

// Roll Dice until getting six
let dice = Math.trunc(Math.random() * 6 + 1);
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1);
  if (dice === 6) {
    console.log(`Finnaly! you got 6`);
  }
}
