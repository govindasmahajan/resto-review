'use strict'
var express = require('express');
var router = express.Router();
var homePageController = require('../controllers/main');

/* GET home page. */
router.get('/', homePageController.index);

module.exports = router;
