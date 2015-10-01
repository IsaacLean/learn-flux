var React = require('react');
var Catalog = require('../components/Catalog.react.js');
var Cart = require('../components/Cart.react.js');

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
