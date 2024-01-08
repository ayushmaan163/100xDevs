const express = require("express");
const app = express();
const port = 3002;

function printNum(req, res) {
  const num = req.headers.num;

  if (num < 1000) {
    res.send("The number is " + num);
  } else {
    res.status(411).send("You have sent a very big number");
  }
}

app.post("/print", printNum);

app.listen(port, () => {
  console.log(`Listening on the port ${port}`);
});
