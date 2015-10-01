var React = require('react');
var Catalog = require('./catalog/Catalog.react.js');
var Cart = require('./cart/Cart.react.js');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Shop</h1>
				<Catalog />
				<h1>Cart</h1>
				<Cart />
			</div>
		)
	}
});

module.exports = App;
