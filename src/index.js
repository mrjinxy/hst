var React = require('react');
var ReactDOM = require('react-dom');
require("!style-loader!css-loader!sass-loader!./sass/main.scss");

var App = require('./components/App');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);