const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Peter Parker");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function sum(counter) {
  var sum = 0;
  for (var i = 0; i < counter; i++) {
    sum += i;
  }
  return sum;
}
var ans = sum(100);
console.log(ans);
