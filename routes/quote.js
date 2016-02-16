// route
'use strict';

const express = require('express');
const router = express.Router();

// const Quote = require('../models/quote');
const quote = require('../controllers/quote');


router.get('/quote', (req, res) => {
  res.send('Get a free quote! (you freeloader)');
});

module.exports = router;

