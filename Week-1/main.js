const express = require("express");
const app = express();
const port = 5173;

function middleWare1(req, res, next) {
  console.log("Going through middleware " + req.headers.number);
  // res.send("Error from Inside Middleware");
  next();
}

// Registering a middleware
app.use(middleWare1);

function doubleNum(num) {
  return num * 2;
}

app.post("/double", (req, res) => {
  var num = req.headers.number;
  var ans = doubleNum(num);
  res.send("Post Handler " + ans);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
