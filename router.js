var express = require('express');
var router = express.Router();
var site = require('./controller/site');

/* GET home page. */
router.get('/', site.index);
router.get('/one', site.one);

module.exports = router;
