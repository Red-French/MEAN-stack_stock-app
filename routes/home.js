'use strict';

const express = require('express');
const router = express.Router();

const home = require('../controllers/home');

// router.get('/home', (req, res) => {
//   res.send('I\'m workin here');
// });

router.get('/home', (req, res) => {
  res.render('home');
});

module.exports = router;
