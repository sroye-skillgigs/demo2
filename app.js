var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.get('/administration', function (req, res) {
  res.send({
    "Output": "Hello Administrator!"
  });
});

app.get('/employer', function (req, res) {
  res.send({
    "Output": "Hello Employer!"
  });
});

app.get('/talent', function (req, res) {
  res.send({
    "Output": "Hello Talent!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
