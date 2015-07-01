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
					<p>
						Rerendreing when data changes
					</p>
					<p>
						Use diff algorythm
					</p>
					<p>
						Efficient update of sub-tree only.
					</p>
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