var Slides = React.createClass({
	componentDidMount: function() {
		document.addEventListener("keydown", this.handleKeyDown, false);
	},

	componentWillUnMount: function() {
	    document.removeEventListener("keydown", this.handleKeyDown, false)
	},

  getInitialState: function() {
    return {
    	menu: false,
    	current: 0,
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
	      		name: 'VirtualDOM'
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

  render: function() {
    var slide = this.state.slides[this.state.current].slide;
    return (
      <div>
      	<Footer nextPage={this._nextPage} prevPage={this._prevPage}/>
      	<Header slides={this.state} active={this.state.menu} setPage={this._setPage} />
      	<div dangerouslySetInnerHTML={{ __html: slide }} />
      </div>
    );
  }
});

React.render(
  <Slides />,
  document.getElementById('slides')
);
