const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 3001;

// The below line returns a middleware that extracts the body
app.use(bodyParser.json());

app.post("/", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  res.send("I am " + name + " and I am " + age + ".");
});

app.listen(port, () => {
  console.log(`Port starting on ${port}`);
});
