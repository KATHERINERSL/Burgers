/*
-------------------------------------------------------------------------------
A main app server javascript for the burger app
-------------------------------------------------------------------------------
*/
'use strict';

var path = require('path');
var PORT = process.env.PORT || 3000;

// Load express
var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

// Load router module(s) and initialize
var Router = require('./controllers/burgers_controller');
var router = new Router(app);

// Make use of the body-parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set static directory reference path
app.use(express.static(path.join(__dirname, 'public'))); 

// Handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Start routers
router.start();

// Start the server to listen to the port
app.listen(PORT, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});