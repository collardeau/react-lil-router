# react-lil-router

react-lil-router is a router component for React.js. 

It relies on [Hasher](https://github.com/millermedeiros/hasher/) to parse the url hash and track the browser state history.

react-lil-router:

* updates the DOM via React (it's a pure React component)
* does not break the browser's back and forward navigation
* utilizes url hashes, i.e, #home.

## Getting Started

```
npm i react-lil-router

```

```javascript
import React from 'react';
import Router from 'react-lil-router';
// import some components to compose your routes

class Routes extends React.Component {

  render() {
    switch(this.props.route){
<<<<<<< HEAD
      case 'item':
        return <Item itemId={this.props.params[0]} />
      default:
        return <Home />
=======
      case '':
        return <Home />;
      case 'item':
        return <Item itemId={this.props.params[0]} />
      default:
        return <About />
>>>>>>> 95cf179... test example with window.location.hash
    }
  }
}

React.render(
  <Router>
    <Routes />
  </Router>, document.getElementById('app')
);

```
<<<<<<< HEAD
## Router Component

When you wrap a component with the Router component, you have access to the url information in `this.props`.

`this.props.route` is a string. It is the first token of the url after the hash.
>>>>>>> 1f1f814... update README
=======
>>>>>>> 95cf179... test example with window.location.hash

## Router Component

When you wrap a component with the Router opponent, you have access to the url information in `this.props`.

`this.props.route` is a string. It is the first token of the url after the hash.

`this.props.params` is an array. It holds the rest of the url tokens.

For example:

| url  | this.props.route | this.props.params |
| ------------- | ------------- | ------------- |
| /#home  | 'home'  | [] |
| /#item/123  | 'item'  | ['123'] |


You can react to this url data at the top of the app to compose routes as you see fit.

The router is invisible to the rest of the app below. You don't need anything special to link another route, just a normal anchor tag will work:

```
<a href="#home'>Home</a>

```

You can use javascript in your handle functions as well:

```
window.location.hash = 'account';

```





