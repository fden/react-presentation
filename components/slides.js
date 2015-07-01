var React = require('react');
var Intro = require('./slides/intro');
var Overview = require('./slides/overview');
var VirtualDOM = require('./slides/virtualDOM');
var DataFlow = require('./slides/dataFlow');
var Flux = require('./slides/flux');
var Demo = require('./slides/demo');
var Components = require('./slides/components');
var Integration = require('./slides/integration');
var JSX = require('./slides/jsx');
var Footer = require('./footer');
var Header = require('./header');


var Slides = React.createClass({
	componentDidMount: function() {
		window.addEventListener("keyup", this.handleKeyDown, false);
	},

	componentWillUnMount: function() {
	    window.removeEventListener("keyup", this.handleKeyDown, false)
	},
componentWillUpdate: function() {
  var node = this.getDOMNode();
  this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
},
 
componentDidUpdate: function() {
  if (this.shouldScrollBottom) {
    var node = this.getDOMNode();
    node.scrollTop = node.scrollHeight
  }
},
  getInitialState: function() {
    return {
    	menu: false,
    	current: 0,
    	menuVisible: false,
	    slides: [
	      	{ 
	      		slide: React.renderToString(<Intro />),
	      		name: 'intro'
	      	},
	      	{
	      		slide: React.renderToString(<Overview />),
	      		name: 'overview'
	      	},	      	
	      	{
	      		slide: React.renderToString(<VirtualDOM />),
	      		name: 'virtualDOM'
	      	},
          	{
            	slide: React.renderToString(<JSX />),
            	name: 'jsx'
          	},	      	
	      	// {
	      	// 	slide: React.renderToString(<DataFlow />),
	      	// 	name: 'dataFlow'
	      	// },	      	
	      	{
	      		slide: React.renderToString(<Components />),
	      		name: 'components'
	      	},
          {
            slide: React.renderToString(<Integration />),
            name: 'integration'
          },
          {
            slide: React.renderToString(<Demo />),
            name: 'demo'
          },
          {
	      		slide: React.renderToString(<Flux />),
	      		name: 'flux'
	      	},
      	]
    };
  },

  handleKeyDown: function(e) {
	var RIGHT = 39;
	var LEFT = 37;
    if( e.keyCode == LEFT ) {
        this._prevPage();
	}
	if( e.keyCode == RIGHT ) {
        this._nextPage();
	}

  },

  handleInputChange: function(key, event) {
    this.setState();
  },

  _nextPage: function(){
  	if (this.state.current < this.state.slides.length-1 ) {
  		this.setState({current: this.state.current+1});
  	}
  },

  _prevPage: function(){
  	if (this.state.current > 0) {
  		this.setState({current: this.state.current-1});
  	}
  },

  _setPage: function(page) {
  	this.setState({current: page})
  },

  _showMenu: function() {

  },

  render: function() {
    var slide = this.state.slides[this.state.current].slide;
    return (
      <div>
      	<Footer nextPage={this._nextPage} prevPage={this._prevPage} visible={this.state.menuVisible}/>
      	<Header slides={this.state} active={this.state.menu} setPage={this._setPage} visible={this.state.menuVisible}/>
      	<div className="slide" dangerouslySetInnerHTML={{ __html: slide }} />
      </div>
    );
  }
});

module.exports = Slides;