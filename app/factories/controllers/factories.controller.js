'use strict';

var mongoose = require('mongoose'),
	Factory = require('../models/factory.models');

exports.findAll = function(req, res){
	Factory.find({}).exec(function(err, factories){
		if(err){
			console.error(err);
			res.status(400).json(err);
		}else{
			res.json(factories);
		};
	});
};

exports.find = function(req, res){
	res.json(req.factory);
};

exports.create = function (req,res) {
	var factory = new Factory(req.body);
	factory.save(function(err){
		if(err){
			rest.status(400).json({
				message:err
			});
		}else{
			res.json({
				message: 'Fabrica criada com sucesso',
				factory: factory
			});
		}
	});
};

exports.update = function(req, res){
	var factory = req.factory;
	req.factory.name = req.body.name;
	req.factory.description = req.body.description;

	factory.save(function(err){
		if(err){
			rest.status(400).json({
				message:err
			});
		}else{
			res.json({
				message: 'Fabrica alterada com sucesso',
				factory: factory
			});
		}
	});
}

exports.delete = function(req, res){
	var factory = req.factory;
	factory.remove(function(err){
		if(err){
			rest.status(400).json({
				message:err
			});
		}else{
			res.json({
				message: 'Fabrica deletada com sucesso',
				factory: factory
			});
		}
	})
}


exports.factoryById = function(req, res, next, factoryId){
	if(!mongoose.Types.ObjectId.isValid(factoryId)){
		res.status(400).json({
			menssagem: 'Fabrica inválida'
		})
	}
	Factory.findById(factoryId).exec(function(err, factory){
		if(err){
			rest.status(404).json(err);
		}
		req.factory = factory;
		next();
	});
}