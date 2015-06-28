var Footer = React.createClass({
	render: function(){
		var visible = this.props.visible ? '' : 'hidden'
		return (
			<div className={visible}>
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