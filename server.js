// Initialize Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Initialize Express
var app = express();

// Establish Server Port
var PORT = process.env.PORT || 8080;

// Data Parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

//Initialize Router
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//Listen on the server
app.listen(PORT, function () {
    console.log('Listening on PORT: ' + PORT);
});