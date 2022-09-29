const request = require("request");
// const fs = require('fs');
let argv = process.argv.slice(2);
let breedName = argv[0];

let url = `https://api.thecatapi./v1/breeds/search?q=${breedName}`;
// let path = "catDetails.html"

request(url, (error, response, body) => {
  console.log('error: ', error && error.message);
  if (!error) {
    console.log('statusCode: ', response && response.statusCode);
  }
  // console.log('body', body);
  try {
    const data = JSON.parse(body);
    console.log(data[0].description);
  } catch (error) {
    console.log(error);
  }

});