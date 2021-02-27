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

router.post('/', cors.corswithOptions, function (req, res, next) {

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
      
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.send(texts)

      // res.render('index', {
      //   title: $title,
      //   texts: texts
      // })

    }, (err) => next(err))
    .catch(error => { console.log("Request Error." + error.message) })


});

module.exports = router;
