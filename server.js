'use strict';

const express = require('express');
const app = express();

const routes = require('./routes/');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;  // dynamic port; reads off envionment variable or sets port to 3000

app.set('view engine', 'jade');  // look in views directory for jade files


app.use(routes);

app.listen(PORT, () => {
  console.log('hey, from server.js!!');
});
