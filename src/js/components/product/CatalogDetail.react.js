var React = require('react');
var AppStore = require('../../stores/AppStore.js');
var AddToCart = require('../catalog/AddToCart.react.js');
var CatalogItem = require('../catalog/CatalogItem.react.js');
var StoreWatchMixin = require('../../mixins/StoreWatchMixin.js');
var Link = require('react-router-component').Link;

function getCatalogItem(component) {
	var thisItem;
	AppStore.getCatalog().forEach(function(item) {
		if(item.id.toString() === component.props.item) {
			thisItem = item;
		}
	});

	return {item: thisItem};
}

var CatalogDetail = React.createClass({
	mixins: [StoreWatchMixin(getCatalogItem)],
	
	render: function() {
		var imgStyle = {
			width: 200,
			height: 200
		};

		return (
			<div>
				<h4>{this.state.item.title}</h4>
				<img src={this.state.item.img} alt="" style={imgStyle} />
				<p>{this.state.item.description}</p>
				<p>${this.state.item.cost} <span className="text-success">{this.state.item.inCart && '(' + this.state.item.qty + ' in cart)'}</span></p>
				<div className="btn-group btn-group-xs">
					<Link href="/" className="btn btn-success">Continue Shopping</Link>
					<AddToCart item={this.state.item} />
				</div>
			</div>
		)
	}
});

module.exports = CatalogDetail;
