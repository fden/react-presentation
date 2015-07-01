var React = require('react');
var Markdown = require('react-markdown');


var Jsx = React.createClass({
	getInitialState: function() {
        return {
            mdSrc: '# jsx'
        };
    },
	render: function() {
		return (
			<Markdown source={this.state.mdSrc} />
		);
	}
});

module.exports = Jsx;