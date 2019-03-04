var express = require('express');
var router = express.Router();
// var site = require(../../c)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/demoOne', function(req, res, next) {
    res.render('demoOne/demoOne', { title: 'demoOne' });
});

module.exports = router;
