var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/../node_modules'))

require('./routes.js')(app);

var server = app.listen(port, '127.0.0.1', function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});