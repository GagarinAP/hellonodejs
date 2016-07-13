var express = require('express');
var bodyParser = require("body-parser");
var appView = require('./views/appView.js');
var module = require('./module/module.js');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));


/*app.get('/all', function (req, res) {
	res.send(module.displayAll(req.query));
});*/

/*app.get('/db/:id', function(req, res) {
	res.send(module.displayId(req.params.id));        
});*/

app.get('/user/:id', function(req, res, next) {
    var id = req.params.id;
    if (id) {
        res.send(module.displayId(id));
    } else {
        next();
    }
});

app.get('/user', function(req, res) {
    res.send(module.displayAll(req.query));
});



app.listen(3000, function () {
  console.log('App run...3000 port');
});