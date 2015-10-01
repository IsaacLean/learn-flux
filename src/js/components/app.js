var React = require('react');
var AppActions = require('../actions/AppActions.js');

var App = React.createClass({
	handleClick: function() {
		AppActions.addItem('this is the item')
	},

	render: function() {
		return <h1 onClick={this.handleClick}>My Flux App</h1>
	}
});

module.exports = App;
