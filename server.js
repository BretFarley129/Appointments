//Set up Server
var express = require('express');
var app = express();

//prepare body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var path = require('path');
var mongoose = require('mongoose');
// Use native promises
mongoose.Promise = global.Promise;


//not sure about the order of these lines. Don't mess with them though
app.use(express.static(path.join(__dirname, './client/dist')));

require('./server/config/mongoose.js');

var router = require('./server/config/routes.js');


router(app);

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});
