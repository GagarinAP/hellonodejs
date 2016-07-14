var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var module = require('./module/module.js');
var appView = require('./views/appView.js');


var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.get('/all', function(req, res) {	
    res.send(module.displayAll(req.query) );
});

/*app.get('/user.html?id=', function(req, res) {	
	console.log(req.query.id);
    res.send(module.displayId(req.query.id));
});*/
app.get('/user/:id', function(req, res) {	
	console.log(req.query.id);
	res.send(module.displayId(req.query.id));
});


app.listen(3000,function(){
	console.log('Run is 3000');
});
