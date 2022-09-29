const request = require("request");
// const fs = require('fs');


// let path = "catDetails.html"

const fetchBreedDescription = function (breedName, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {

    if (error) {
      return callback(error, null);
    }

    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback("breed not found.", null)
    }
    return callback(null, data[0].description);
  })
};

module.exports = { fetchBreedDescription };