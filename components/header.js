var React = require('react');
var MenuLink = require('./MenuLink');

var Header = React.createClass({
	render: function(){
		var name = 'integration';
		var page = 2;
		var visible = this.props.visible ? '' : 'hidden'
		return (
			<div className={visible} >
				<MenuLink name={name} setPage={this.props.setPage} page={page} />
			</div>
		);
	}
});

module.exports = Header;