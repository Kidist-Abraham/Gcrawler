var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');

var indexs=[];
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
  var bodyLower=bodyText.toLowerCase()
  var wordLower=word.toLowerCase()
  var start =0
  var ind;
  if(bodyLower.indexOf(wordLower) !== -1) {
   while (bodyLower.indexOf(wordLower,start) !== -1){
   ind = bodyLower.indexOf(wordLower,start)
   indexs.push(bodyText.substring(ind - 10, ind + 10)) 
   start=ind+1
   
}
    return indexs;
  }
  return false;
}
