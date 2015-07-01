var React = require('react');
var Markdown = require('react-markdown');


var Jsx = React.createClass({
	getInitialState: function() {
        return {
            markdownSrc: [
                '```',
                'var HelloMessage = React.createClass({ \nrender: function() {\nreturn <div>Hello {this.props.name}</div>;\n}\n});\nReact.render(<HelloMessage name="John" />, mountNode); ',
                '```',
            ].join(''),

            htmlMode: 'raw'
        };
    },
	render: function() {
		return (
			<Markdown
                className="result"
                source={this.state.markdownSrc}
                skipHtml={this.state.htmlMode === 'skip'}
                escapeHtml={this.state.htmlMode === 'escape'}
            />
		);
	}
});

module.exports = Jsx;