var React = require('react');
var AppStore = require('../../stores/AppStore.js');
var AddToCart = require('./AddToCart.react.js');
var CatalogItem = require('./CatalogItem.react.js');
var StoreWatchMixin = require('../../mixins/StoreWatchMixin.js');

function getCatalog() {
	return {items: AppStore.getCatalog()};
}

var Catalog = React.createClass({
	getInitialState: function() {
		return getCatalog();
	},

	render: function() {
		var items = this.state.items.map(function(item) {
			return <CatalogItem item={item} />
		})

		return (
			<div className="row">
				{items}
			</div>
		);
	}
});

module.exports = Catalog;