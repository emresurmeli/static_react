var React = require('react');

var App = React.createClass({
  render(){
    return <h1>Static React</h1>;
  }
})

React.render(<App/>, document.getElementById('static'));
