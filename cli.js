var fs = require("fs");


fs.readFile("help.txt", "utf8", function(error, data) {

  if (error) {
    return console.log(error);
  }

  console.log(data);

  var dataArr = data.split(",");

  // We will then re-display the content as an array for later use.
  console.log(dataArr);

});

var inputString = process.argv;
console.log(process.argv);

var concert = inputString[2];
var spotify = inputString[3];
var movie = inputString[4];
var JustDoIt = inputstring[5];


// Core node package for reading and writing files
var fs = require("fs");


fs.writeFile("movies.txt", "Inception, Die Hard", function(err) {

  // If the code experiences any errors it will log the error to the console.
  if (err) {
    return console.log(err);
  }

  // Otherwise, it will print: "movies.txt was updated!"
  console.log("movies.txt was updated!");

});


