const express = require("express");
const app = express();
const port = 3003;

function calculateSum(counter) {
  var sum = 0;
  for (var i = 1; i <= counter; i++) {
    sum += i;
  }
  return sum;
}

function calculateMultiply(counter) {
  var answer = 1;
  for (var i = 1; i <= counter; i++) {
    answer *= i;
  }
  return answer;
}

function objectNotation(req, res) {
  const counter = req.headers.counter;

  const sumAns = calculateSum(counter);
  const multiplyAns = calculateMultiply(counter);

  var answerObject = {
    sum: sumAns,
    multiply: multiplyAns,
  };

  res.send(answerObject);
}

app.post("/object", objectNotation);

app.listen(port, () => {
  console.log(`Listening on the port ${port}`);
});
