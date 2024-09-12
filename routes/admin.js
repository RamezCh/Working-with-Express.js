const express = require('express');

const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

// router fns work in exactly the same way as app fns

router.get('/add-product', (req, res, next) => {
  // rootDir is instead of __dirname, '../'
  // Basically we start from the root directory and then go to the views folder and then to the add-product.html file
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
