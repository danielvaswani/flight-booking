let csvToJson = require("csvtojson");
const fs = require("fs");

let fileInputName = "airports.csv";
let fileOutputName = "airports.json";

// convert users.csv file to JSON array
csvToJson()
  .fromFile(fileInputName)
  .then((airports) => {
    fs.writeFile(fileOutputName, JSON.stringify(airports, null, 4), (err) => {
      if (err) {
        throw err;
      }
      console.log("JSON array is saved.");
    });
  })
  .catch((err) => {
    // log error if any
    console.log(err);
  });
