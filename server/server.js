require("./config/config");
require("./db/mongoose");

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

const port = process.env.PORT;
var mainRouter = require("./routes/main.route");

app
  .use(bodyParser.json())
  .use("/api", mainRouter)
  .listen(port, () => {
    console.log(`started on port ${port}`);
  });

module.exports = { app };
