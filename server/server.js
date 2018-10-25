require("./config/config");
require("./db/mongoose");

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

const port = process.env.PORT;
var mainRouter = require("./routes/main.route");

app
  .use(function(request, response, next) { // configuration of headers
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Content-Type, x-auth");
    response.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT")
    next();
  })
  .use('/', express.static(__dirname + '/public'))
  .use(bodyParser.json())
  .use("/api", mainRouter)
  .listen(port, () => {
    console.log(`started on port ${port}`);
  });

module.exports = { app };
