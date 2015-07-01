var React = require('react');

var Components = React.createClass({
	render: function() {
		return (
			<div>
				<h2>
					Components
				</h2>
				<h3>Api</h3>
				<ul>
					<li>props, state</li>
					<li>refs</li>
					<li>lifecycle</li>
				</ul>
				<h3>Component Lifecycle</h3>
				<ul>
					<li>Mounting: A component is being inserted into the DOM.</li>
					<li>Updating: A component is being re-rendered</li>
					<li>Unmounting: A component is being removed from the DOM.</li>
				</ul>
			</div>
		);
	}


});

module.exports = Components;