'use strict';

const express = require('express');
const app = express();
const routes = require('./routes/');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

app.use(routes);

app.listen(PORT, () => {
  console.log('hey, from server.js!!');
});

// var server = http.createServer ( function (req, res) {
//      res.writeHead(200, {'Content-Type':
//      'text/html'});
//      res.end('<h1>Hello World</h1>')
// });
// var port = Number(process.env.PORT || 3000);  // dynamic port; it reads off the environment variable or set it to 3000
// server.listen(port);