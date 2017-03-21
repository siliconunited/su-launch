var express = require("express");

var app = express();

app.use(express.static(__dirname + './'));

app.get('/', function(req, res) {
  res.sendfile(__dirname + './index.html');
});

var port = process.env.PORT || 3000;
console.log('Port ' + port);
app.listen(port);
