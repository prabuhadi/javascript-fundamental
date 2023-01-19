// Coding Challange #1

// Data 1
let markWeight = 78;
let markHeight = 1.69;
const bodyMassIndex1 = markWeight / markHeight ** 2; //mass in kg, height in meter
// console.log(bodyMassIndex1);

let johnWeight = 92;
let johnHeight = 1.95;
const bodyMassIndex2 = johnWeight / johnHeight ** 2; //mass in kg, height in meter
// console.log(bodyMassIndex2);

const markHigherBMI = bodyMassIndex1 >= bodyMassIndex2;
// console.log(markHigherBMI);

// Data 2
let markWeight2 = 95;
let markHeight2 = 1.88;
const bodyMassIndex3 = markWeight2 / (markHeight2 * markHeight2);
// console.log(bodyMassIndex3);

let johnWeight2 = 85;
let johnHeight2 = 1.76;
const bodyMassIndex4 = johnWeight2 / (johnHeight2 * johnHeight2);
// console.log(bodyMassIndex4);

// console.log(bodyMassIndex3 >= bodyMassIndex4);

// Coding Challange #2

// Data 1
// if (bodyMassIndex1 > bodyMassIndex2) {
//   console.log(
//     `Mark's BMI (${bodyMassIndex1}) is higher than John's (${bodyMassIndex2})!`
//   );
// } else {
//   console.log(
//     `John's BMI(${bodyMassIndex2}) is higher than Mark's (${bodyMassIndex1})!`
//   );
// }

// // Data 2
// if (bodyMassIndex3 > bodyMassIndex4) {
//   console.log(
//     `Mark's BMI (${bodyMassIndex3}) is higher than John's (${bodyMassIndex4})!`
//   );
// } else {
//   console.log(
//     `John's BMI (${bodyMassIndex4}) is higher than Mark's (${bodyMassIndex3})!`
//   );
// }

// Coding Challange #3

// Data 1
// const dolphinsTest1 = 96;
// const dolphinsTest2 = 108;
// const dolphinsTest3 = 89;

// const koalasTest1 = 88;
// const koalasTest2 = 91;
// const koalasTest3 = 110;

// const doplhinsScore = Number(
//   (dolphinsTest1 + dolphinsTest2 + dolphinsTest3) / 3
// );
// const koalasScore = Number((koalasTest1 + koalasTest2 + koalasTest3) / 3);

// console.log(doplhinsScore);
// console.log(koalasScore);

// if (doplhinsScore > koalasScore) {
//   console.log(`Dolphins wins a trophy! 🏆 with average score ${doplhinsScore}`);
// } else if (koalasScore > doplhinsScore) {
//   console.log(`Koalas wins a thropy! 🏆 with average score ${koalasScore}`);
// } else if (doplhinsScore === koalasScore) {
//   console.log(`Both teams wins a thropy!`);
// }

// Bonus 1

const dolphinsTest1 = 97;
const dolphinsTest2 = 122;
const dolphinsTest3 = 101;

const koalasTest1 = 99;
const koalasTest2 = 115;
const koalasTest3 = 106;

const doplhinsScore = Number(
  (dolphinsTest1 + dolphinsTest2 + dolphinsTest3) / 3
);
const koalasScore = Number((koalasTest1 + koalasTest2 + koalasTest3) / 3);

// console.log(doplhinsScore);
// console.log(koalasScore);

// if (doplhinsScore > koalasScore && doplhinsScore >= 100) {
//   console.log(`Dolphins wins a trophy! 🏆 with average score ${doplhinsScore}`);
// } else if (koalasScore > doplhinsScore && koalasScore >= 100) {
//   console.log(`Koalas wins a thropy! 🏆 with average score ${koalasScore}`);
// } else if (
//   doplhinsScore === koalasScore &&
//   doplhinsScore >= 100 &&
//   koalasScore >= 100
// ) {
//   console.log(`Both teams wins a thropy!`);
// } else {
//   console.log(`No one got thropy 😭`);
// }

// Coding Challange #4

// Data 1
const bill = 375;
let tip;

// Using If/else statement

// if (bill >= 50 && bill <= 300) {
//   tip = 15 / 100;
// } else {
//   tip = 20 / 100;
// }
// console.log(finalValue);

// Using teranry statement
bill >= 50 && bill <= 300 ? (tip = 15 / 100) : (tip = 20 / 100);

const tips = bill * tip;
const finalValue = bill * tip + bill;
console.log(
  `The bill was ${bill}, the tip was ${tips}, and the total value is ${finalValue}`
);
