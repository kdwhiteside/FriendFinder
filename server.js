var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var routes = require('./app/routing/html-routes.js')
var friends = require('./app/data/friends.js')

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, './app/public/home.html'));
});
//THIS GETS SURVEY PAGE
app.get('/survey.html', function (req, res) {
	console.log('yo')
	res.sendFile(path.join(__dirname, './app/public/survey.html'));
});

app.post('/api/friends', function (req, res) {
;
	console.log(req.body.name);
	console.log(req.body.scores);
	console.log(req.body.photo);
	res.json(friends.friendList);
	console.log(friends.friendList)
});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});