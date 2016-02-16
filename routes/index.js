'use strict';

const express = require('express');
const router = express.Router();

const defaultRoute = require('./default');

// load routes in order of need
router.use(defaultRoute);  // middleware

module.exports = router;