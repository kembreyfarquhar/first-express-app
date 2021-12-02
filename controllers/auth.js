const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  console.log("inside get login");
  res.send("GET LOGIN");
});

router.post("/login", (req, res) => {
  // username & password
  //   const username = req.body.username;
  //   const password = req.body.password;
  const { username, password } = req.body; // uses destructuring to grab values
  console.log(`username: ${username}\npassword: ${password}`);
  res.send("POST LOGIN");
});

module.exports = router;
