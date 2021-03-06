var React = require('react');
var AppStore = require('../../stores/AppStore.js');
var RemoveFromCart = require('./RemoveFromCart.react.js');
var Increase = require('./Increase.react.js');
var Decrease = require('./Decrease.react.js');
var StoreWatchMixin = require('../../mixins/StoreWatchMixin.js');
var Link = require('react-router-component').Link;

function cartItems() {
	return {items: AppStore.getCart()};
}

var Cart = React.createClass({
	mixins: [StoreWatchMixin(cartItems)],

	render: function() {
		var total = 0;
		var items = this.state.items.map(function(item, i) {
			var subtotal = item.cost * item.qty;
			total += subtotal;

			return (
				<tr key={i}>
					<td><RemoveFromCart index={i} /></td>
					<td>{item.title}</td>
					<td>{item.qty}</td>
					<td>
						<Increase index={i} />
						<Decrease index={i} />
					</td>
					<td>${subtotal}</td>
				</tr>
			)
		})

		return (
			<div>
				<table className="table table-hover">
					<thead>
						<tr>
							<th></th>
							<th>Item</th>
							<th>Qty</th>
							<th></th>
							<th>Subtotal</th>
						</tr>
					</thead>
					<tbody>
						{items}
					</tbody>
					<tfoot>
						<tr>
							<td colspan="4" className="text-right">Total</td>
							<td>${total}</td>
						</tr>
					</tfoot>
				</table>
				<Link href="/" className="btn btn-success">Continue Shopping</Link>
			</div>
		);
	}
});

module.exports = Cart;
