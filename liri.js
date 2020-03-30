require("dotenv").config();
var keys = require("./keys.js");
var SpotifyWebApi = require("node-spotify-api");
var input = process.argv[2];
var query = process.argv[3];
var moment = require("moment");
var axios =require("axios");
var fs = require("fs");



if (input === "concert-this") {
    caxios
    .get("https://en.wikipedia.org/wiki/Kudos_(granola_bar)")
    .then(function(response) {
      // If the axios was successful...
      // Then log the body from the site!
      console.log(response.data);
    })
    .catch(function(error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
  
} else if (input === "windy") {
    console.log("spotify-this-song");
} else if (input === "rainy") {
    spotify();
} else if (input === "do-what-it-says") {
    console.log("Just stay inside!");
} else {
    console.log("Not a valid weather type");
}



function spotify (){

    
}

// var spotify = new Spotify({
//     id: <4537174fa1b54335acd1fa94dba89fda>,
//     secret: <871137f7535a41b995f6624949a562f4>
//   });
   
//   spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
   
//   console.log(data); 
//   });

// var spotifyApi = new SpotifyWebApi({
//     clientId: '4537174fa1b54335acd1fa94dba89fda',
//     clientSecret: '871137f7535a41b995f6624949a562f4',
//     redirectUri: 'http://www.example.com/callback'
//   });