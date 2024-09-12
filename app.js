import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// we can emit the .js as it is added automatically
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

// adminRoutes is a middleware function, remember order matters
app.use('/admin', adminRoutes); // filter paths, only paths starting with /admin will be handled by adminRoutes

// order matters, this will never be reached if it is placed before adminRoutes but in this case it will because we are using get here and post in adminRoutes and not .use
app.use(shopRoutes);

app.use((req, res, next) => {
  // 404 = page not found code
  res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);
