var React = require('react');

var Intro = React.createClass({
	style: {
		'text-align': 'center'
	},
	logoStyles: {
		'height': '50%',
		'margin-left': 'auto'
	},
	render: function() {
		return (
			<div>
				<div style={this.style} className="overlay">
					<h3>
						React is library for building user interfaces	
					</h3>
					<img 
						style={this.logoStyles}
						src="https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png" 
					/>
				</div>
				<div  className="overlay">
					<p> 
						It is maintained by Facebook, Instagram
					</p>
					<p>
						Simple, declarative and composable. 
					</p>
					<p>
						Only handles the user interface in an app.
					</p>
				</div>
			</div>
		);
	}
});

module.exports = Intro;