var express = require('express');
var morgan = require('morgan'); //Log information on the server side for viewing on console

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev')); //dev is a prefomatted format in the morgan implementation

app.use(express.static(__dirname + '/public')); // the public folder is available to the user side for use
