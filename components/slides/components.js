var React = require('react');

var Components = React.createClass({
	style: {
	},
	imgStyles: {
		'height': '50%',
		'margin-top': '10%',
		'margin-left': 'auto'
	},
	render: function() {
		return (
			<div>
				<div style={this.style} className='overlay'>
					<h2>Components</h2>
					<ul>
						<li>Components are just state machines</li>
						<li>setState</li>
						<li>Separation of Concerns</li>
					</ul>
				</div>
				<img src="http://blog.risingstack.com/content/images/2015/05/react_component_hierarchy.png" />
				<h3>Api</h3>
				<ul>
					<li>props, state</li>
					<li>refs</li>
					<li>events</li>
				</ul>
				<h3>Component Lifecycle</h3>
				<ul>
					<li>Mounting</li>
					<li>Updating</li>
					<li>Unmounting</li>
				</ul>
			</div>
		);
	}


});

module.exports = Components;