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
console.log(scoreDolphin, scoreKoala);

//trivia : Selector same index with CTRL + D
const checkWinner = function (avgDolphin, avgKoala) {
  if (avgDolphin >= 2 * avgKoala) {
    console.log(`Dolphins Win 🏆 (${avgDolphin} vs ${avgKoala})`);
  } else if (avgKoala >= 2 * avgDolphin) {
    console.log(`Koalas Win 🏆 (${avgDolphin} vs ${avgKoala})`);
  } else {
    console.log(`No team wins..`);
  }
};
checkWinner(scoreDolphin, scoreKoala);
checkWinner(100, 200);

// Test 2
scoreDolphin = calcAverage(85, 54, 41);
scoreKoala = calcAverage(23, 34, 27);
console.log(scoreDolphin, scoreKoala);
checkWinner(scoreDolphin, scoreKoala);

// function checkWinner(team) {
//   const avgDolphin = calcAverage(doplhinScore);
//   const avgKoala = calcAverage(koalaScore);
//   return console.log(`${team} win (${avgDolphin} vs ${avgKoala})`);
// }
