const path = require("path");

const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", function(req, res) {
  res.redirect("login");
})

app.get("/signup", function (req, res) {
  res.render("signup");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/logout", function (req, res) {
  res.redirect("login");
});

app.listen(3000);
