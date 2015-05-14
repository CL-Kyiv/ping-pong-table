var express = require('express');

var app = express();

// marker for `grunt-express` to inject static folder/contents
app.use(function staticsPlaceholder(req, res, next) {
  return next();
});

// mock get data routes
app.get('/hello/:who', function(req, res, next) {
  return res.json({greeting: req.params.who});
});

module.exports = app;