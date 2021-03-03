var express = require('express');
const { response } = require('../app');
var router = express.Router();
var pretty = require('pretty')
var cors = require('./cors')

const cheerio = require('cheerio')
const fetch = require('node-fetch');
const bodyParser = require('body-parser')
const { TooManyRequests } = require('http-errors');

router.use(bodyParser.text())
/* GET users listing. */

router.options('*', cors.corswithOptions, (req, res) => { res.sendStatus(200); })

// POST function from the Client, when URL works, scrape the URL
// and parse the content for the text of the novel.
router.post('/', cors.corswithOptions, function (req, res, next) {

  if (req.body.includes("https://novelonomicon.com/novels/")) {

    fetch(req.body)
      .then(response => response.text())
      .then(data => {
        const $ = cheerio.load(data),
          $body = $('body'),
          $text = $body.find('.entry-inner'),
          $title = $text.find('h1').text(),
          $words = $text.find('p').not('[style=text-align\\:\\ center\\;]')

        texts = $words.text().toString()
        title = $title.toString()

        whole_text = title.concat(". \n")

        // Concatante each part of the text with new line for better
        // readability for the Speech API (pause at periods)
        $words.each(function (i, text) {
          //console.log($(text).text())
          whole_text = whole_text.concat($(text).text().toString())
          whole_text = whole_text.concat('\n')
        })

        //console.log(whole_text)

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.send(whole_text)

        // res.render('index', {
        //   title: $title,
        //   texts: texts
        // })

      }, (err) => next(err))
      .catch(error => { console.log("Request Error." + error.message) })
  } else {
    res.statusCode = 400;
    res.end("URL is not supported as of this moment. Plase use the URL novelonomicon")
  }

});

module.exports = router;
