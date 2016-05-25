
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var fs = require('fs');
var app = express();
var router = require('./router');
var mongoose = require('mongoose');
var recipes = require('./recipesAPI.js');

// enter "npm run dev" to start the server with nodemon

//DB

//App

//Server

var port = process.env.PORT || 3000;
var server = http.createServer(app);
server.listen(port);
console.log('listening on port ', port);

// app.set('port', process.env.PORT || 3000);
// var server = app.listen(app.get('port'), function() {
//     var port = server.address().port;
//     console.log('listening on port ' + port);
// });

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'node_modules')));


app.post('/upload*', function(req, res) {
    console.log(req.method, req.url);
    var data = '';
    req.setEncoding('binary');
    req.on('data', function(chunk){
    	data += chunk;
    });
    
    req.on('end', function(){
    	fs.writeFile('picture.png', data, 'binary', function(err){
    		if(err) throw err;
    		console.log('file saved');
    	})
    })
});

app.get('/add', function(req, res){
    res.status(200).send(recipes.meals);
});