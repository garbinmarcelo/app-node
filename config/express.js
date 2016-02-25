'use strict';

var express = require('express'),
	bodyParser = require('body-parser'),
	config = require('./config');


	module.exports = function(db) {
		var app = express();

		app.use(function(req, res, next) {
			res.header("Access-Control-Allow-Origin", "*");
			res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
			res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
			res.setHeader('Access-Control-Allow-Credentials', true);
			next();
		});

		app.use(bodyParser.urlencoded({
			extended: true
		}));
		app.use(bodyParser.json());

		var api = express.Router();

		require('../app/core/routes/core.routes')(api);
		require('../app/breweries/routes/breweries.routes')(api);


		app.use('/api', api);
		return app;
	}