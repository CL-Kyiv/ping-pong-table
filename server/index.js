var express = require('express');

var MongoClient = require('mongodb').MongoClient;
var _ = require('lodash-node');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/hello/:who', function(req, res, next) {
  return res.send('Hello '+  req.params.who);
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
