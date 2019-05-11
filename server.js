const Bundler = require('parcel-bundler');
const app = require('express')();

const file = './src/index.html';
const options = {};

const bundler = new Bundler(file, options);

// Let express use the bundler middleware, this will let Parcel handle every request over your express server
app.use(bundler.middleware());

//create a default port to serve the app
const port = process.env.PORT || 5000;
app.listen(port);
//log in to feedback that this is running
console.log("Server started on port " + port);
