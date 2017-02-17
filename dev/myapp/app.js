var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', 3000);

app.use('/home', express.static('public/html/index.html'))
app.use('/home', express.static('public/css/index.css'))
app.use('/home', express.static('public/js/index.js'))

app.get('/', function (req, res) {
  app.use(express.static('public/html/index.html'))
})

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Server successfully running at ' + port);
});