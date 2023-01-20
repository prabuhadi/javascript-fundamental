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
