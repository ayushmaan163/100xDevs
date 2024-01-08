// Fetching data from an already running file - index.js

function logResponseBody(jsonBody) {
  console.log(jsonBody);
}

function callbackFn(result) {
  result.json().then(logResponseBody);
}

var sendObj = {
  method: "GET",
};

fetch("hhtps://localhost:3000/printObj", sendObj).then(callbackFn);
