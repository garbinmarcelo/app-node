'use strict';

var config = require('./config/config'),
	mongoose = require('mongoose');

	var db = mongoose.connect(config.db, function(err){
		if(err){
			console.error('Não foi possivel conectar ao mongoDB');
			console.log(err);
		}
	});

var	app = require('./config/express')(db);

	app.listen(config.port);
	exports = module.exports =app;
	console.log('Unoesc App function funcionando na porta '+ config.port);