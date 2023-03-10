# PDF Drive EBook Scraper

![PDF Drive Logo](https://www.pdfdrive.com/assets/img/logo-1.png.pagespeed.ce.5UNSDNAJsC.png)

Get and Download free Ebooks online using PDF-Drive. This Project was built using Axios, Cheerio and PDF Drive Website.

# HOW TO INSTALL?
```
npm i pdfdrive-ebook-scraper
```

# Require to export function
```js
//CommonJS
const pdfdrive = require('pdfdrive-ebook-scraper');
```

## SIMPLE USAGE
### usage of `findEbook()` and `getEbook()`
```js
const pdfdrive = require('pdfdrive-ebook-scraper');

let res = await pdfdrive.findEbook("Javascript") //query search
let res2 = await pdfdrive.getEbook(res[0].ebookUrl) //object resp. of findEbook()
console.log(res2)
```

# Sample Sucess Response
```js
//Success response for findEbook()
[
  {
    ebookTitle: 'Some ebook title.',
    ebookUrl: 'https://www.pdfdrive.com/javascript-javascript-for-beginners-learn-javascript-programming-with-ease-in-half-the-time-everything-about-the-language-coding-programming-and-web-pages-you-need-to-know-e158299863.html'
  },
  {
    ebookTitle: 'Some ebook title.',
    ebookUrl: 'https://www.pdfdrive.com/javascript-javascript-programming-for-absolute-beginners-ultimate-guide-to-javascript-coding-javascript-programs-and-javascript-language-4-e195096889.html'
  },
  {
    ebookTitle: 'Some ebook title.',
    ebookUrl: 'https://www.pdfdrive.com/javascript-javascript-for-beginners-learn-javascript-programming-with-ease-in-half-the-time-everything-about-the-language-coding-programming-and-web-pages-you-need-to-know-e195090778.html'
  }
]

//Success response for getEbook()
{
  ebookName: 'Professional: JavaScript® for Web Developers by Nicholas C. Zakas - PDF Drive',
  dlUrl: 'https://www.pdfdrive.com/download.pdf?id=158299863&h=825cd5dcb22639d3150748459bf25a7f'
}
```