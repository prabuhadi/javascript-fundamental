// Coding Challange #1

// Data 1
let markWeight = 78;
let markHeight = 1.69;
const bodyMassIndex1 = markWeight / markHeight ** 2; //mass in kg, height in meter
console.log(bodyMassIndex1);

let johnWeight = 92;
let johnHeight = 1.95;
const bodyMassIndex2 = johnWeight / johnHeight ** 2; //mass in kg, height in meter
console.log(bodyMassIndex2);

const markHigherBMI = bodyMassIndex1 >= bodyMassIndex2;
console.log(markHigherBMI);

// Data 2
let markWeight2 = 95;
let markHeight2 = 1.88;
const bodyMassIndex3 = markWeight2 / (markHeight2 * markHeight2);
console.log(bodyMassIndex3);

let johnWeight2 = 85;
let johnHeight2 = 1.76;
const bodyMassIndex4 = johnWeight2 / (johnHeight2 * johnHeight2);
console.log(bodyMassIndex4);

console.log(bodyMassIndex3 >= bodyMassIndex4);

// Coding Challange #2
