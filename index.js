const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  console.log('Inside default "/"');
  res.send("DEFAULT");
});

app.get("/two", (req, res) => {
  console.log('Inside "/two"');
  res.send("PAGE TWO");
});

app.get("/research/:animal", (req, res) => {
  const animal = req.params.animal;
  res.send(`Researching ${animal}`);
});

app.listen(PORT);
