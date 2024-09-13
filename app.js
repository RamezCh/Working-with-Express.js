const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// we can emit the .js as it is added automatically
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
// Takes static path requests and forwards them to the public folder
// Allows us to link CSS in HTML files without having to specify the full path
app.use(express.static(path.join(__dirname, 'public'))); // We can have multiple static folders and it will go through each of them until it gets a valid response

// adminRoutes is a middleware function, remember order matters
app.use('/admin', adminRoutes); // filter paths, only paths starting with /admin will be handled by adminRoutes

// order matters, this will never be reached if it is placed before adminRoutes but in this case it will because we are using get here and post in adminRoutes and not .use
app.use(shopRoutes);

app.use((req, res, next) => {
  // 404 = page not found code
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
