const { fetchBreedDescription } = require("./breedFetcher");
let argv = process.argv.slice(2);
let breedName = argv[0];

fetchBreedDescription(breedName, (error, descri) => {
  if (error) {
    console.log("Error fetch details: ", error);
  } else {
    console.log("descri :", descri);
  }
});

// fetchBreedDescription(breedName, console.log);