require("dotenv").config();
var keys = require("./keys.js");
var SpotifyWebApi = require("node-spotify-api");
var input = process.argv[2];
var query = process.argv[3];
var moment = require("moment");
var axios = require("axios");
var fs = require("fs");
// var spotify = new Spotify(keys.spotify);
var request = require('request');


if (input === "concert-this") {
    searchBandsInTown();

} else if (input === "Spotify-this-song") {
    console.log("Work in progress I am having trouble with this task");
} else if (input === "movie-this") {
    movie();
} else if (input === "do-what-it-says") {
    doWhatItSays();
} else {
    console.log("Can't Do that dave");
}

function searchBandsInTown() {
    request("https://rest.bandsintown.com/artists/" + query + "?app_id=codingbootcamp", function (error, response, body) {
        var jsonData = JSON.parse(body);

      console.log("Name of Band: "+ jsonData.name);
      console.log("Events during or planned during global pandemic: "+ jsonData.upcoming_event_count);
    });
}



// This is from the request library: https://www.npmjs.com/package/request
// OMDB request
function movie() {
    request("https://www.omdbapi.com/?t=" + query + "&apikey=trilogy", function (error, response, body) {
        var jsonData = JSON.parse(body);

        console.log("Title: " + jsonData.Title);
        console.log("Year: " + jsonData.Year);
        console.log("Rated: " + jsonData.Rated);
        console.log("IMDB Rating: " + jsonData.imdbRating);
        console.log("Country: " + jsonData.Country);
        console.log("Language: " + jsonData.Language);
        console.log("Plot: " + jsonData.Plot);
        console.log("Actors: " + jsonData.Actors);
    });
}

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function read(err, data) {
        if (err) throw err;
        console.log(data);
    });
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