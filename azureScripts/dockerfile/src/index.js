var helpers = require('./helpers.js');
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var move = function() { return 'Not yet loaded'; };
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/', function(req, res) {
  var result = move(req.body, helpers);
  res.json(result);
});

app.post('/heroFilesHere', multer({ 
  dest: './',
  rename: function() {
    return 'myHero';
  }
}), function(req, res) {
  move = require('./myHero.js');
  res.send("File saved...probably");
});

app.listen(8080);