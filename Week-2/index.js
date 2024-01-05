const express = require("express");
const app = express();
const port = 3000;

function totalSum(counter) {
  var sum = 0;
  for (var i = 1; i <= counter; i++) {
    sum += i;
  }
  return sum;
}

app.get("/sum", (req, res) => {
  var counter = req.query.counter7;
  var calculatedSum = totalSum(counter);

  res.send("The sum is " + calculatedSum);
});

// Post Handler
function createUser(req, res) {
  res.send("Post Handler");
}
app.post("/createUser", createUser);

// Put Handler
function putUser(req, res) {
  res.send("Put Handler");
}
app.put("/putUser", putUser);

// Delete Handler
function deleteUser(req, res) {
  res.send("Delete Handler");
}
app.put("/deleteUser", deleteUser);

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
