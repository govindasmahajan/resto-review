'use strict'
var express = require('express');
var router = express.Router();

const ctrLocations = require('../controllers/locations'),
    ctrOthers = require('../controllers/others');

/** Locations Pages */
router.get('/', ctrLocations.homeList);
router.get('/location', ctrLocations.locationInfo);
router.get('/location/review/new', ctrLocations.addReview);

/** Other Pages */
router.get('/about', ctrOthers.about);

module.exports = router;
