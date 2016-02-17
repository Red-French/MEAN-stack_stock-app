// King-Daddy Router //
'use strict';

const express = require('express');
const router = express.Router();

const defaultRoute = require('./home');  // url
const quote = require('./quote');  // url

// middleware (in order of need)
router.use(defaultRoute);
router.use(quote);

module.exports = router;
