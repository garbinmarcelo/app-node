'use strict';



module.exports = function(api){
	var factories = require('../controllers/factories.controller');

	api.route('/factories')
		.get(factories.findAll)
		.post(factories.create);

	api.route('/factories/:factoryId')
		.get(factories.find)
		.put(factories.update)
		.delete(factories.delete);

	api.param('factoryId', factories.factoryById);
}