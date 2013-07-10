var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buf = new Buffer(256);
var bufs = new String;

buf=fs.readFileSync('index.html');
bufs=buf.toString();

app.get('/', function(request, response) {
  response.send(bufs);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
