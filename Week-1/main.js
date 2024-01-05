const express = require("express");
const app = express();
const port = 5173;

function doubleNum(num) {
  return num * 2;
}

app.post("/double", (req, res) => {
  var num = req.query.number;
  var ans = doubleNum(num);
  res.send("Post Handler " + ans);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
