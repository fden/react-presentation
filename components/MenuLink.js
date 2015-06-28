var React = require('react');

var MenuLink = React.createClass({
	render: function() {
		return (
			<a
				onClick={this.props.setPage.bind(null, this.props.page)}
			>{this.props.name}</a>
		);
	}
});

module.exports = MenuLink;