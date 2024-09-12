const path = require('path');

// dirname is a global variable that is available in every file
// require.main.filename is a global variable that is available in every file
// require.main.filename is the file that started the application
// dirname is the directory name of the file that started the application
// in this case it is app.js
// so this will return the directory name of app.js
// this will return the absolute path of the directory that contains app.js
module.exports = path.dirname(require.main.filename);
// Basically in simpler terms this will return the absolute path of the directory that contains app.js
// This is useful because we can use this to construct paths in our application
