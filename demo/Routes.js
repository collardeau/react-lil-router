import React from 'react';
import Router from '../src/Router';

export default class Routes extends React.Component {

  render(){
    return (
      <div>
        <Navigation />
        <b>Route</b>: {this.props.route || '/' }<br />
        <b>Params</b>: { this.props.params.length ? this.props.params : 'none' }
      </div>
    );
  }
}

class Navigation extends React.Component {

  handleClick(route){ 
    window.location.hash = route;
  }

  render () {
    return (
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#item/123">Item/123</a></li>
        <li onClick={this.handleClick.bind(this, 'account')}>Account (via handleClick)</li>
      </ul>
    );
  }
}

React.render(
  <Router>
    <Routes />
  </Router>,
    document.getElementById('app')
);

