import express from 'express';

const router = express.Router();

// router fns work in exactly the same way as app fns

router.get('/add-product', (req, res, next) => {
  res.send(
    '<form method="POST" action="/product"><input type="text" name="title" /><button type="submit">Add Product</button></form>'
  );
});

router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
