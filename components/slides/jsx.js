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
            <div>
                <div className='overlay'>
                    <h2>JSX</h2>
                    <p>JavaScript syntax extension</p>
                    <p>Similar to HTML</p>
                    <p>JSX transforms from an XML-like syntax into native JavaScript</p>
                </div>
                <img />
			    <Markdown source={this.state.mdSrc} />
            </div>
		);
	}
});

module.exports = Jsx;