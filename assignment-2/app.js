const express = require('express');

const app = express();

// Middleware for /users path
app.use('/users', (req, res, next) => {
  console.log('This is the first user middleware');
  next();
});

app.use('/users', (req, res, next) => {
  console.log('This is the second user middleware');
  res.send('<h1>The "Users" Page</h1>'); // Ends the request here
});

// Middleware for root path '/'
app.use('/', (req, res, next) => {
  console.log('This is the first middleware');
  next();
});

app.use('/', (req, res, next) => {
  console.log('This is the second middleware');
  res.send('<h1>Hello from the Backend!</h1>'); // Ends the request here
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
