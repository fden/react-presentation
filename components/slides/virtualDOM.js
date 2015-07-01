var React = require('react');

var VirtualDOM = React.createClass({
	imgStyle: {
		'width': '70%'
	},
	render: function() {
		return (
			<div>
				<div className="overlay">
					<h2>
						Virtual DOM
					</h2>
				</div>
				<div  className="overlay">
					<img
						style={this.imgStyle}
						src="http://teropa.info/images/onchange_vdom_change.svg" 
					/>
				</div>
			</div>
		);
	}
});

module.exports = VirtualDOM;