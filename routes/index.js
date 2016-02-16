// route
'use strict';

const express = require('express');
const router = express.Router();

const defaultRoute = require('./home');
const quote = require('./quote');

// load routes in order of need
router.use(defaultRoute);  // middleware
router.use(quote);

module.exports = router;
