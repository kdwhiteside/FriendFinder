// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
// var express = require('express');
// var bodyParser = require('body-parser');
// var path = require('path');

// Sets up the Express App
// =============================================================
// var app = express();
// var PORT = 3000;

// Sets up the Express app to handle data parsing
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Star Wars Characters (DATA)
// =============================================================


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page



// Search for Specific Character (or all characters) - provides JSON
// app.get('/api/:friendList', function (req, res) {
// 	var chosen = req.params.friendList;
// 	if (chosen) {
// 		console.log(chosen);

// 		for (var i = 0; i < friendList.length; i++) {
// 			if (chosen === friendList[i].routeName) {
// 				res.json(friendList[i]);
// 				return;
// 			}
// 		}

// 		res.json(friendList);
// 	} else {
// 		res.json(false);
// 	}
// });

// app.get('/survey', function (req, res) {
// 	var chosen = req.params.friendList;
// 	if (chosen) {
// 		console.log(chosen);

// 		for (var i = 0; i < friendList.length; i++) {
// 			if (chosen === friendList[i].routeName) {
// 				res.json(friendList[i]);
// 				return;
// 			}
// 		}

// 		res.json(friendList);
// 	} else {
// 		res.json(false);
// 	}
// });

// Create New Characters - takes in JSON input
// app.post('/api/new', function (req, res) {
// 	var newFriend = req.body;
// 	newFriend.routeName = newFriend.name.replace(/\s+/g, '').toLowerCase();

// 	console.log(newFriend);

// 	reserveList.push(newFriend);

// 	res.json(newFriend);
// });

// Starts the server to begin listening
// =============================================================
// app.listen(PORT, function () {
// 	console.log('App listening on PORT ' + PORT);
// });