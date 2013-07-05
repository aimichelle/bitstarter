var express = require('express');
var fs = require('fs');
var Buffer = require('buffer');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var words = fs.readFileSync('index.html','encoding').toString("utf-8");
  response.send(words);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});