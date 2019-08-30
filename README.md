# Gcrawler
Gcrawler is a web exploring library which can be used for searching a word or a sentence on a web page and its subpages. It is going to go searching on the subpages only if the word is not found in the main page. For the sake of avoiding unrelated searches, the library navigates only the subpages in the same domain with the main page.    

In order to use this package, first install the `gcrawler` package

`npm install gcrawler`

Then require `gcrawler` in your code and pass the module the parameters page and word which corresponds to the page you want to explore and the word you want to search respectively


```
var crawl = require('gcrawler'); 
crawl(<the page>,<the word>);
```
You should see the number of occurrences of the word and the page in which the word is found.

## TODO
Make the library return the appropriate values instead of console logging them. (Needs a work around to return values computed by asynchronous functions like `request`)
