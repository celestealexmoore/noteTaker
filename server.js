const express = require("express");
const PORT = 3001;
const app = express();

app.set("view engine", "ejs");

// middleware

// routes

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}!`);
});
