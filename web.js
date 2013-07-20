var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var data = fs.readFileSync('index.html');
  var contents = data.toString();
  response.send(contents);
  //response.send("Hello world");
});

var port = process.env.PORT || 8081;
app.listen(port, function() {
  console.log("Listening on " + port);
});
