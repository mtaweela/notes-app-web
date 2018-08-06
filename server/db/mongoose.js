var mongoose = require("mongoose");

const dbURI = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;
mongoose.connect(
  dbURI,
  { useNewUrlParser: true }
);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Database connected");
});

module.exports = { mongoose };
