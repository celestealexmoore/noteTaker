const express = require("express");
path = require("path");
const PORT = 3001;
const app = express();

// html routes
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/public/")));
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "/public/notes.html")));

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}!`);
});
