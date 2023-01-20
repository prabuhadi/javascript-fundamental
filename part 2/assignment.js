"use strict";
// Assignment 1
function describeCountry(country, population, capitalCity) {
  const propertiesCountry = `${country} has ${population} million people and it's capital city is ${capitalCity}.`;
  return propertiesCountry;
}

const describeFinland = describeCountry("Finland", 6, "Helsinki");
const describePortugal = describeCountry("Portugal", 33, "Lisbon");
const describeEngland = describeCountry("England", 80, "London");
console.log(describeFinland);
console.log(describePortugal);
console.log(describeEngland);

// Assignment 2

// Function Expression
// const worldPopulation = function percentageOfWorld1(countryPopulation) {
//   return (countryPopulation / 7900) * 100;
// };

// const chinaPopulation = worldPopulation(1441);
// const indonesiaPopulation = worldPopulation(1276);
// const japanPopulation = worldPopulation(784);
// console.log(chinaPopulation);
// console.log(indonesiaPopulation);
// console.log(japanPopulation);

// Fucntion Declaration
function percentageOfWorld2(population) {
  return (population / 7900) * 100;
}

const population2 = percentageOfWorld2(1751);
// console.log(population2);

// Assignment 3
// Using arrow function
const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percPortugal = percentageOfWorld3(10);
const percChina = percentageOfWorld3(1441);
const percUSA = percentageOfWorld3(332);
console.log(percPortugal, percChina, percUSA);

// Assignment 4

const worldPopulation = function percentageOfWorld1(countryPopulation) {
  return (countryPopulation / 7900) * 100;
};

const describePopulation = function (country, population) {
  const percentage = worldPopulation(population);
  return `${country} has ${population} million people, which is about ${percentage}% of the world`;
};

console.log(describePopulation("China", 1441));
console.log(describePopulation("Portugal", 10));
console.log(describePopulation("USA", 332));
