var MenuLink = React.createClass({
	render: function() {
		return (
			<a
			>{this.props.name}</a>
		);
	}
});
				// onClick={this.props.setPage.bind(null, this.props.page)}