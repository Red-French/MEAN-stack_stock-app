// King-Daddy Router //
'use strict';

const express = require('express');
const router = express.Router();

// URLs
const defaultRoute = require('./home');
const portfolio = require('./portfolio');
const quote = require('./quote');

// middleware (in order of need)
router.use(defaultRoute);
router.use(portfolio);
router.use(quote);

module.exports = router;
