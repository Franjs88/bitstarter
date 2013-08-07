var express = require('express');
var fs = require('fs');
var app = express();

var index = "index.html";
index = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(index.toString());
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
