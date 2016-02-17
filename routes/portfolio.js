// route
'use strict';

const express = require('express');
const router = express.Router();

const portfolio = require('../controllers/portfolio');

router.get('/portfolio', (req, res) => {
  res.render('portfolio');
});

module.exports = router;
