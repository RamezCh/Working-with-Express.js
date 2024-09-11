const http = require('http');

const express = require('express');

const app = express();

// Will be executed for every incoming request
// Receives 3 arguments: request, response, next
// next is a function that will be called to forward the request to the next middleware in line
app.use((req, res, next) => {
  console.log('In the middleware!');
  // Call next to forward the request to the next middleware otherwise the request will be stuck here
  next();
});

app.use((req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello from Express!</h1>');
});

const server = http.createServer();

server.listen(3000);
