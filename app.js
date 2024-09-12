import express from 'express';
import bodyParser from 'body-parser';
// Should restart when adding new import, don't depend on nodemon
const app = express();

// Adding middleware for parsing the body
// Otherwise we get undefined
app.use(bodyParser.urlencoded({ extended: false }));
// Can put use '/' at top to prove that it will match any route & order is important
// Order of middleware is important
app.use('/add-product', (req, res, next) => {
  res.send(
    '<form method="POST" action="/product"><input type="text" name="title" /><button type="submit">Add Product</button></form>'
  );
});
// app.use executes for both get and post requests
app.use('/product', (req, res, next) => {
  // We get object with key value pairs
  console.log(req.body);
  // redirects to / route
  res.redirect('/');
});
// app.get executes only for get requests
app.get('/product', (req, res, next) => {
  // We get object with key value pairs
  console.log(req.body);
  // redirects to / route
  res.redirect('/');
});

// app.post executes only for post requests
app.post('/product', (req, res, next) => {
  // We get object with key value pairs
  console.log(req.body);
  // redirects to / route
  res.redirect('/');
});

// Request goes through the middleware from top to bottom
// If we don't call next() the request will be stuck
// / will match any route
app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
