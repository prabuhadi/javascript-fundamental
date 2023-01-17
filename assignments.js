// Assignments 1
const countryName = "Japan";
const continent = "Asia";
const populationNumber = 125;

// console.log(countryName);
// console.log(continent);
// console.log(populationNumber);

// Assignments 2
let isIsland = true;
let language;
// console.log(typeof countryName);
// console.log(typeof isIsland);
// console.log(typeof populationNumber);
// console.log(typeof language);

// Assignments 3
language = "Japanese";
// language = "english"; Make it error & cant overwrite variable
// console.log(countryName);
// console.log(language);

// Assignments 4
let halfPopulation = populationNumber / 2;
let quarterPopulation = halfPopulation / 2;
quarterPopulation++;
// console.log(quarterPopulation);
// console.log(halfPopulation / 2);

// Finland has 6 million population
const populationFinland = 6;
// console.log(populationNumber > populationFinland);
// console.log(quarterPopulation > 6);

const averagePopulation = 33;
// console.log(populationNumber < averagePopulation);
// console.log(quarterPopulation < 33);

// const description =
//   countryName +
//   " is in Asia, and its " +
//   populationNumber +
//   " people speak " +
//   language;
// console.log(description);

// Assignments 5
const description = `${countryName} is in ${continent}, and it's have population around ${populationNumber} million and most of them speak ${language}`;
console.log(description);

// Assignments 6
const needPopulation = 33 - populationNumber;
if (populationNumber > 33) {
  console.log(`${countryName}'s population is above average.`);
} else {
  console.log(
    `${countryName}'s population is ${needPopulation} million below average`
  );
}

// Assignments 6
console.log("9" - "5"); //4
console.log("19" - "13" + "17"); //617
console.log("19" - "13" + 17); //23
console.log(typeof "123" < typeof 57); //false
console.log(5 + 6 + "4" + 9 - 4 - 2); //99
