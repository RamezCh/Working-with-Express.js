// this module will be used to serve the shop.html file
const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  // constructs an absolute path to the file by joining the current directory with the file name

  // __dirname is a global variable that is available in any file in node.js and it gives you the absolute path to the current directory of the file

  // we used ../ because we are in the routes folder and we need to go up one level to access the views folder
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  // we are using path join because it works on all OS systems
});

module.exports = router;

// /views/shop.html won't be served because it's not in the public folder

// ./views/shop.html won't work because it needs to be in an absolute path (in respect of OS system)
