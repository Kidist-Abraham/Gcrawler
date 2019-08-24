var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');

var indexs;
var page = "https://nixos.org/nix/manual/";
console.log(" page " + page);
request(page, function(error, response, body) {
   if(error) {
     console.log("Error: " + error);
   }
   console.log("Status code: " + response.statusCode);
   if(response.statusCode === 200) {
     var $ = cheerio.load(body);
     console.log(searchWord($, "--dump"))
   }
});

function searchWord($, word) {
  var bodyText = $('html > body').text();
  if(bodyText.toLowerCase().indexOf(word.toLowerCase()) !== -1) {
   var ind = bodyText.toLowerCase().indexOf(word.toLowerCase())
    return bodyText.substring(ind - 7, ind + 40);
  }
  return false;
}
