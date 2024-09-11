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
  // Send a response to the client
  // This will not forward the request to the next middleware
  // It will end the request-response cycle
  res.send('<h1>Hello from Express!</h1>');
});

// Create a server and pass the express app to it to handle requests
app.listen(3000);
/*
Express Listen does what we did before
http.createServer and .listen(PORT)
*/
