const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("Inside get request");
  res.send("CONTENT");
});

app.listen(3333);
