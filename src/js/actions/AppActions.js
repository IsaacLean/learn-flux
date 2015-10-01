var AppConstants = require('../constants/AppConstants.js');
var AppDispatcher = require('../dispatchers/AppDispatcher.js');

var AppActions = {
	addItem: function(item) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.ADD_ITEM,
			item: item
		})
	},
	removeItem: function(item) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.REMOVE_ITEM,
			index: index
		})
	},
	
	decreaseItem: function(item) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.DECREASE_ITEM,
			index: index
		})
	},

	increaseItem: function(item) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.INCREASE_ITEM,
			index: index
		})
	}
};

module.exports = AppActions;
