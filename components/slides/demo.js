var React = require('react');

var Demo = React.createClass({
	hstyle: {
		position: 'fixed'
	},
	todoStyle: {
		margin: '20vh 0'
	},
	render: function() {
		return (
			<div>
				<div className='overlay'>
					<h2 >Demo</h2>
				</div>
				<div className='overlay'>
					<TodoApp/>
				</div>
			</div>
		);
	}


});

module.exports = Demo;


var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText, index) {
      return <li key={index + itemText}>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});
var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div className=''>
        <h3>TODO</h3>
		<TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
});

