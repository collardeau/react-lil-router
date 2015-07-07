var React = require('react/addons');
var hasher = require('hasher');

module.exports = class Router extends React.Component {

  handleChange() {
    let hash = hasher.getHash();
    let parts = hash.split('/');
    this.setState({
      route: parts.shift(),
      params: parts
    });
  }

  constructor() {
    super();
    hasher.init();
    this.state = { route: '', params: [''] };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    hasher.changed.add(this.handleChange);
    hasher.initialized.add(this.handleChange);
  }

  renderChildren() {
    return React.Children.map(this.props.children, child => {
      return React.addons.cloneWithProps(child, {
        route: this.state.route,
        params: this.state.params
      });
    });
  }

  render () {
    return (
      <div>
        { this.renderChildren() }
      </div>
    );
  }

}

