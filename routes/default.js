'use strict';

const express = require('express');
const router = express.Router();

router.get('/default', (req, res) => {
  res.send('I\'m workin here');
});

module.exports = router;