var React = require('react');

var Flux = React.createClass({
	render: function() {
		return (
			<div>
				<h2>Flux</h2>
				<ul>
					<li>Dispatcher</li>
					<li>Store</li>
					<li>Actions</li>
					<li>View(React)</li>
				</ul>
			</div>
		);
	}
});

module.exports = Flux;