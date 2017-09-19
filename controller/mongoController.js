var mongoModel = require('../models/mongoModel');

var mongoController = function() {}

mongoController.prototype.getActivity = function(params, callback) {
	mongoModel.getActivity(params, function(err, result) {		
	    callback(err, result);
	});
}

mongoController.prototype.mongoDbStats = function(params, callback) {
	mongoModel.mongoDbStats(params, function(err, result) {		
	    callback(err, result);
	});
}

module.exports = new mongoController();