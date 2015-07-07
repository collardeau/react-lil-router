var webpack = require('webpack');

module.exports = {

  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './demo/Routes.js'
  ],

  output: {
    path: './demo',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/}
    ]
  }

};

