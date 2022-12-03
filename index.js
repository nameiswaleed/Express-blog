// imports
const bodyParser = require("body-parser");
const express = require("express");
require("dotenv").config();
const port = process.env.PORT;
const hbs = require("hbs");
//initialize of app
const app = express();
const db = require("./database");

//middlewares
app.use("/static", express.static("public"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// routes
app.get("/", (req, res) => {
  res.render("index", {
    path: "http://localhost:3000/static",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    path: "http://localhost:3000/static",
  });
});
app.get("/contact", (req, res) => {
  res.render("contact", {
    path: "http://localhost:3000/static",
  });
});
app.get("/post", (req, res) => {
  res.render("post", {
    path: "http://localhost:3000/static",
  });
});

//post forms
app.post("/message", (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var phone = req.body.phone;
  var message = req.body.email;

  var data = {
    name: name,
    email: email,
    phone: phone,
    message: message,
  };
  db.collection("message").insertOne(data, function (err, collection) {
    if (err) throw err;
    console.log("Record inserted Successfully");
  });

  return res.redirect("/contact");
});

// app listeing
app.listen(port, () => {
  console.log(`app is listening on http://localhost:${port}`);
});
