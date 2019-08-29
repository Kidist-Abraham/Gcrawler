var request = require('request');
var cheerio = require('cheerio');



var $;

function searchMain(page,word) {
  var indexs=[];
  var relativeLinks = [];
  request(page, function(error, response, body) {
    if(error) {
      return("Error: " + error);
    }

    if(response.statusCode === 200) {

      $ = cheerio.load(body);

      $("a[href^='/']").each(function() {
        relativeLinks.push($(this).attr('href'));
      });

    searchWord($, word,relativeLinks,page,indexs)

    }

  });

}

function searchWord($, word,relativeLinks,page,indexs) {
  relativeLinks=relativeLinks.filter((v,i) => relativeLinks.indexOf(v) === i)
  var bodyText = $('html > body').text();
  var bodyLower=bodyText.toLowerCase()
  var wordLower=word.toLowerCase()
  var start =0
  var ind;
  if(bodyLower.indexOf(wordLower) !== -1) {
    while (bodyLower.indexOf(wordLower,start) !== -1){
      ind = bodyLower.indexOf(wordLower,start)
      indexs.push(bodyText.substring(ind - (word.length+10), ind + (word.length+10)))
      start=ind+1

    }
    console.log(indexs.length + " occurrences found on page "+page);
  }
  else{

    if (relativeLinks.length>1){

      var ind =0
      while(ind<relativeLinks.length){
        if(relativeLinks[ind]!="/"){
          searchMain(page+relativeLinks[ind],word)
          ind=ind+1
        }
        else ind=ind+1
      }

    }
    else {

    }
  }

}


module.exports = searchMain;
