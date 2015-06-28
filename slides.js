var React = require('react');
var Intro = require('./components/slides/intro');
var Overview = require('./components/slides/overview');
var VirtualDOM = require('./components/slides/virtualDOM');
var View = require('./components/slides/view');
var Components = require('./components/slides/components');
var Integration = require('./components/slides/integration');
var Footer = require('./components/footer');
var Header = require('./components/header');


var Slides = React.createClass({
	componentDidMount: function() {
		document.addEventListener("keydown", this.handleKeyDown, false);
	},

	componentWillUnMount: function() {
	    document.removeEventListener("keydown", this.handleKeyDown, false)
	},

	componentDidMount: function () {
	    var slide = this.props.params.slide;
	    console.log(slide);
	    for (var i = this.state.slides.length - 1; i >= 0; i--) {
	    	if(this.state.slides[i].name = slide) {
	    		this._setPage(i);
	    	}
	    };
	    this.setState({ message: message });
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
	      		slide: React.renderToString(<View />),
	      		name: 'view'
	      	},	      	{
	      		slide: React.renderToString(<Components />),
	      		name: 'components'
	      	},
	      	{
	      		slide: React.renderToString(<Integration />),
	      		name: 'integration'
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

React.render(
  <Slides />,
  document.getElementById('slides')
);

// Route = ReactRouter.Route;


// React.render((
//   <Route history={new HashHistory}>
//     <Route path="/" component={Slides}>
//       <Route path="/:slide" component={Slides}/>
//     </Route>
//   </Route>
// ), document.body);