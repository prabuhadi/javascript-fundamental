"use strict";
// Coding Challenge #1

// DATA 1
const dolphinScore = (44, 23, 71);
const koalaScore = (65, 54, 49);

const a = 44;
const b = 23;
const c = 71;

// arrow function
const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphin = calcAverage(44, 23, 71);
let scoreKoala = calcAverage(65, 54, 49);
// console.log(scoreDolphin, scoreKoala);

//trivia : Selector same index with CTRL + D
// const checkWinner = function (avgDolphin, avgKoala) {
//   if (avgDolphin >= 2 * avgKoala) {
//     console.log(`Dolphins Win 🏆 (${avgDolphin} vs ${avgKoala})`);
//   } else if (avgKoala >= 2 * avgDolphin) {
//     console.log(`Koalas Win 🏆 (${avgDolphin} vs ${avgKoala})`);
//   } else {
//     console.log(`No team wins..`);
//   }
// };
// checkWinner(scoreDolphin, scoreKoala);
// checkWinner(100, 200);

// Test 2
scoreDolphin = calcAverage(85, 54, 41);
scoreKoala = calcAverage(23, 34, 27);
// console.log(scoreDolphin, scoreKoala);
// checkWinner(scoreDolphin, scoreKoala);

// function checkWinner(team) {
//   const avgDolphin = calcAverage(doplhinScore);
//   const avgKoala = calcAverage(koalaScore);
//   return console.log(`${team} win (${avgDolphin} vs ${avgKoala})`);
// }

// Coding Challange #2

// const bill = 120;
// console.log(tipValue);

const calcTip2 = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tip);
// const total = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];
// console.log(total);

// Coding Challange #3

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};
// console.log(john, mark);

const testBMI = john.calcBMI > mark.calcBMI;
console.log(testBMI);
// Ternary Functin
console.log(
  `${john.fullName} BMI (${john.calcBMI()}) is ${
    testBMI ? "higher" : "lower"
  } than ${mark.fullName} BMI ${mark.calcBMI()}`
);

// Coding Challange #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills);
console.log(tips);
console.log(totals);

const calcAverages = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i]; or can be
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverages(bills));
console.log(calcAverages(tips));
console.log(calcAverages(totals));
