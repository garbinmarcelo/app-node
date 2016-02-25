'use strict';

	var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

	var BrewerySchema = new Schema({
		name: {
			type: String,
			unique: true,
			required: true
		},
		description:{
			type: String
		},create:{
			type: Date
		},update:{
			type: Date
		}
	})

	module.exports = mongoose.model('Brewery', BrewerySchema);