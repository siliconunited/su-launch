var express = require("express");

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

app.get('/jobs', function(req, res) {
  res.sendfile(__dirname + '/public/jobs.html');
});

var port = process.env.PORT || 3000;
console.log('Port ' + port);
app.listen(port);
