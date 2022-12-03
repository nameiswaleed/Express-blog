const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/portfolio");

var db = mongoose.connection;

db.on("error", console.log.bind(console, "connection error"));
db.once("open", function (callback) {
  console.log("connection succeeded");
});
module.exports = db;
