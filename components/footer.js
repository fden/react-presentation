var Footer = React.createClass({
	render: function(){
		return (
			<div>
				<a 
					onClick={this.props.prevPage.bind(null)}
				>back | </a>
				<a 
					onClick={this.props.nextPage.bind(null)}
				>next</a>
			</div>
		);
	}
});