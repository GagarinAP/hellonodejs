var express = require('express');
var bodyParser = require("body-parser");
var appView = require('./views/appView.js');
var module = require('./module/module.js');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));


app.get('/all', function (req, res) {
	res.send(module.displayAll(req.query));
});

app.get('/db', function(req, res, next) {
    res.send(module.displayId(req.query)); 
    next();   
});
app.get('/db/:id', function(req, res, next) {
    res.send('User: ' + req.params.id);        
});


app.listen(3000, function () {
  console.log('App run...3000 port');
});