var React = require('react');

var Intro = React.createClass({
	style: {

	},
	render: function() {
		return (
			<div>
				<div className="overlay">
					<h3 style={this.style}>
						React is library fo building user interfaces	
					</h3>
				</div>
				<div>
					<p> 
						It is maintained by Facebook, Instagram and a community of individual developers and corporations
					</p>
					<p>
						Its goal is to be simple, declarative and composable. 
					</p>
					<p>
						Only handles the user interface in an app.
					</p>
					<p>
						Used on the homepages of Report, Feedly, Airbnb and others
					</p>
				</div>
			</div>
		);
	}
});

module.exports = Intro;