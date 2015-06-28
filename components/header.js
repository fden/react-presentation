var Header = React.createClass({
	render: function(){
		var name = 'integration';
		var page = 2;
		return (
			<div>
				<MenuLink name={name} setPage={this.props.setPage} page={page} />
			</div>
		);
	}
});