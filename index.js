const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const AuthRouter = require("./controllers/auth");

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(morgan("combined"));

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

app.use("/auth", AuthRouter);

app.listen(PORT);
