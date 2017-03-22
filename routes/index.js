var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.locals.page = 'landing';

  res.render('index', { title: 'Silicon United Makes Firmware for Makers' });
});

module.exports = router;
