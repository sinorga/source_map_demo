const path = require('path');
const webpack = require('webpack');
const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({sourceMap: true}),
  ],
};

module.exports = config;
