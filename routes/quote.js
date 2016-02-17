// route
'use strict';

const express = require('express');
const router = express.Router();

// const Quote = require('../models/api');
const quote = require('../controllers/quote');

router.get('/quote', (req, res) => {
  res.render('quote');
});

module.exports = router;
