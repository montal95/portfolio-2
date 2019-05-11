const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
//create the express app
const app = express();
//create all middleware to hander serving the app
app.use("/", serveStatic(path.join(__dirname, "/src")));
//serve the index file by default
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/src/index.html");
});
//create a default port to serve the app
const port = process.env.PORT || 5000;
app.listen(port);
//log in to feedback that this is running
console.log("Server started on port " + port);
