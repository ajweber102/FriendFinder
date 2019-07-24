// Initialize dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Initialize express
var app = express();

// Establish server port var
var PORT = process.env.PORT || 8080;
