// Your html-routes.js file should include two routes:

// A GET Route to /survey which should display the survey page.
// A default USE route that leads to home.html which displays the home page.
var express = require('express');
var app = express();
var PORT = 3000;
var path = require('path');

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'home.html'));
});
exports.survey = function(app){ 
	app.get('/survey', function (req, res) {
	// res.send('Hello World');
	console.log(res)
	res.sendFile(path.join(__dirname, 'survey.html'));
	});
};