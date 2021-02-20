var express = require('express');
const { response } = require('../app');
var router = express.Router();
var pretty = require('pretty')

const say = require('say')
const cheerio = require('cheerio')
const fetch = require('node-fetch')

/* GET users listing. */
router.get('/', function (req, res, next) {

  fetch(/*'https://novelfull.com/invincible/chapter-01-snow-wind-continent.html'*/'https://novelonomicon.com/novels/isekai-yururi-kikou/chapter-274/')
    .then(response => response.text())
    .then(data => {
      const $ = cheerio.load(data),
        $body = $('body'),
        $text = $body.find('.entry-inner'),
        $title = $text.find('h1').text(),
        $words = $text.find('p').not('[style=text-align\\:\\ center\\;]')

      // $words.each(function (i, item) {
      //   console.log(i + "\t" + $(item).text())
      // })
      // console.log($words.length)
      // console.log($words.text().toString())
      //console.log(pretty($('body').text()))
      /*console.log(pretty(data))*/
      texts = $words.text().toString()

      res.render('index', {
        title: $title,
        text: texts
      })

      say.speak("hi, this is a test. can u hear anything?", 3.0, (err) => {
        if (err) {
          console.log("Errorssss: " + err)
        }

        console.log("Finished speech")
      })

    })
    .catch(error => { console.log("Request Error." + error.message) })


});

module.exports = router;
