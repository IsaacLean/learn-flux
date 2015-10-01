var React = require('react');
var CartSummary = require('./CartSummary.react.js');
var Link = require('react-router-component').Link;

var Header = React.createClass({
	render: function() {
		return (
			<div className="row">
				<div className="col-sm-6"><h1><Link href="/">Shop App</Link></h1></div>
				<div className="col-sm-2 col-sm-push-3">
					<CartSummary />
				</div>
			</div>
		)
	}
});

module.exports = Header;
