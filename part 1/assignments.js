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
// console.log(description);

// Assignments 6
const needPopulation = 33 - populationNumber;
// if (populationNumber > 33) {
//   console.log(`${countryName}'s population is above average.`);
// } else {
//   console.log(
//     `${countryName}'s population is ${needPopulation} million below average`
//   );
// }

// Assignments 6
// console.log("9" - "5"); //4
// console.log("19" - "13" + "17"); //617
// console.log("19" - "13" + 17); //23
// console.log(typeof "123" < typeof 57); //false
// console.log(5 + 6 + "4" + 9 - 4 - 2); //99

// Assignments 7
// // if const not define as number it's creeate bug
// const numNeighbours = Number(
//   prompt(`How many neighbour countries does your country have?`)
// );
// console.log(numNeighbours);
// if (numNeighbours === 1) {
//   console.log(`Only 1 border`);
// } else if (numNeighbours > 1) {
//   console.log(`More than 1 border`);
// } else {
//   console.log(`No border`);
// }

// Assignments 8
const hasCertificate = true;
const isSingle = true;
const isHealthy = false;
const hasVisa = false;

const liveAboard = (hasCertificate && hasVisa) || (isHealthy && hasVisa);

if (liveAboard) {
  console.log(`Prabu is eligible to Live Overseas! ✔`);
} else {
  console.log(`Prabu is not yet eligible but still can live overseas 👍`);
}

if (hasCertificate && isSingle && isHealthy && hasVisa) {
  console.log(`You should live in United States`);
} else if ((hasCertificate && isHealthy && hasVisa) || isSingle) {
  console.log(`You should live in Japan`);
} else if ((hasCertificate && hasVisa) || (isHealthy && isSingle)) {
  console.log(`You should live in Australia`);
} else if (hasCertificate || (hasVisa && isHealthy && isSingle)) {
  console.log(`You should live in Singapore`);
} else {
  console.log(`You're not meet any criteria, unless you live in Philipinese`);
}

if (language === "Japanese" && populationNumber > 50 && isIsland) {
  console.log(`You should live in ${countryName} ✔`);
} else {
  console.log(`You should try live in Singapore first`);
}

// Assignment 9
const popularLanguage = "English";

switch (popularLanguage) {
  case "Chinese":
  case "Mandarin":
    console.log(`Most number of native speakers!`);
    break;
  case "Spanish":
    console.log(`2nd place in number of native speakers`);
    break;
  case "English":
    console.log(`3rd place in number of native speakers`);
    break;
  case "Hindi":
    console.log(`4th place`);
    break;
  case "Arabic":
    console.log(`5th most speaken language`);
    break;
  default:
    console.log(`Great language too 😊`);
}
