const express = require('express');

const app = express();

// Can put use '/' at top to prove that it will match any route & order is important
// Order of middleware is important
app.use('/add-product', (req, res, next) => {
  res.send('<h1>The "Add Product" Page</h1>');
});

// Request goes through the middleware from top to bottom
// If we don't call next() the request will be stuck
// / will match any route
app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
