var React = require('react');
var Catalog = require('./catalog/Catalog.react.js');
var Cart = require('./cart/Cart.react.js');
var Router = require('react-router-component');
var CatalogDetail = require('./product/CatalogDetail.react.js');
var Template = require('./Template.react.js');

var Locations = Router.Locations;
var Location = Router.Location;

var App = React.createClass({
	render: function() {
		return (
			<Template>
				<Locations>
					<Location path="/" handler={Catalog} />
					<Location path="/cart" handler={Cart} />
					<Location path="/item/:item" handler={CatalogDetail} />
				</Locations>
			</Template>
		)
	}
});

module.exports = App;
