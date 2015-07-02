var React = require('react');

var Flux = React.createClass({
    imgStyles: {
        'width': '1000px',
        'margin-bottom': '10%',
        'margin-left': 'auto'
    },
	render: function() {
		return (
			<div>
                <div className="overlay">
                    <h2>Flux</h2>
                    <ul>
                        <li>Dispatcher</li>
                        <li>Store</li>
                        <li>Actions</li>
                        <li>View(React)</li>
                    </ul>
                </div>
                <div>
                    <img
                        style={this.imgStyles}
                        src="http://fluxxor.com/images/flux-complex.png"
                    />
                </div>
			</div>
		);
	}
});

module.exports = Flux;