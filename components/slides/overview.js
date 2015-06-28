var React = require('react');

var Overview = React.createClass({
	render: function() {
		return (
			<div className="overlay">
				<h3>What makes React.js special?</h3>
				<div>
					<ul>
						<li>Virtual DOM</li>
						<li>Just for view</li>
						<li>Components</li>
						<li>Top down data flow</li>
					</ul>
				</div>
			</div>
		);
	}
});

module.exports = Overview;