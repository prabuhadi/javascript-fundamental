"use strict";
// Assignment 1
function describeCountry(country, population, capitalCity) {
  const propertiesCountry = `${country} has ${population} million people and it's capital city is ${capitalCity}.`;
  return propertiesCountry;
}

const describeFinland = describeCountry("Finland", 6, "Helsinki");
const describePortugal = describeCountry("Portugal", 33, "Lisbon");
const describeEngland = describeCountry("England", 80, "London");
// console.log(describeFinland);
// console.log(describePortugal);
// console.log(describeEngland);

// Assignment 2

// Function Expression
// const worldPopulation1 = function percentageOfWorld1(countryPopulation) {
//   return (countryPopulation / 7900) * 100;
// };

const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100; // countryPupulation change to population
};

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
const percJapan = percentageOfWorld3(127);
console.log(percPortugal, percChina, percUSA);

// Assignment 4

const worldPopulation = function percentageOfWorld1(countryPopulation) {
  return (countryPopulation / 7900) * 100;
};

const describePopulation = function (country, population) {
  const percentage = worldPopulation(population);
  return `${country} has ${population} million people, which is about ${percentage}% of the world`;
};

// console.log(describePopulation("China", 1441));
// console.log(describePopulation("Portugal", 10));
// console.log(describePopulation("USA", 332));

// Assignment 5
const populationChina = 1444;
const populationPortugal = 10;
const populationUSA = 332;
const populationJapan = 127;
// const populations = [
//   populationChina,
//   populationPortugal,
//   populationUSA,
//   populationJapan,
// ];
// console.log(populations.length === 4);

// const percentages = [
//   percentageOfWorld2(populations[0]),
//   percentageOfWorld2(populations[1]),
//   percentageOfWorld2(populations[2]),
//   percentageOfWorld2(populations[3]),
// ];
// console.log(percentages);

// Assignment 6
const neighbours = ["Japan", "USA", "Portugal", "China"];
neighbours.push("Utopia");
neighbours.pop();
console.log(neighbours.includes("Utopia"));
neighbours[neighbours.indexOf("Portugal")] = "Republic of Portugal";
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log(`It's European Country`);
} else {
  console.log(`Probably not a central European Country`);
}

// Assignment 7
// const myCountry = {
//   country: "Indonesia",
//   capital: "Jakarta",
//   language: "Bahasa",
//   population: 280,
//   neighbours: ["Japan", "USA", "Portugal", "China"],
// };
// console.log(myCountry);

// Assignment 8
// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
// );

// myCountry["population"] += 2; // Bracket Notation
// console.log(myCountry.population);
// myCountry.population -= 2; // Dot Notation
// console.log(myCountry.population);

// Assignment 9
const myCountry = {
  country: "Indonesia",
  capital: "Jakarta",
  language: "Bahasa",
  population: 280,
  neighbours: ["Japan", "USA", "Portugal", "China"],
  isIsland: true,

  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
  },

  checkIsland: function () {
    return `${this.country} is ${
      this.isIsland ? "archpellego" : "not archpeleggo"
    }`;
  },
};
console.log(myCountry.describe());
console.log(myCountry.checkIsland());

// Assignment 10
// for (let vote = 1; vote <= 50; vote++) {
//   console.log(`Vote number ${vote} is currently voting`);
// }

// Assignment 11
// const populations = [
//   populationChina,
//   populationPortugal,
//   populationUSA,
//   populationJapan,
// ];

// const percentages2 = [];

// for (let i = 0; i < populations.length; i++) {
//   const calc = percentageOfWorld1(populations[i]);
//   percentages2.push(calc);
// }
// console.log(percentages2);

// Assignment 12
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`---------- Starting Exercise ${exercise}`);

//   for (let rep = 0; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} ????????????????`);
//   }
// }

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let neighbour = 0; neighbour < listOfNeighbours[i].length; neighbour++)
    console.log(`Neigbour: ${listOfNeighbours[i][neighbour]}`);
}

// Assignment 13
const populations = [
  populationChina,
  populationPortugal,
  populationUSA,
  populationJapan,
];

const percentages3 = [];

let i = 0;
while (i < populations.length) {
  const calc = percentageOfWorld1(populations[i]);
  percentages3.push(calc);
  i++;
}
console.log(percentages3);
