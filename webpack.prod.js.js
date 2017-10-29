const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const common = require('./webpack.config.js');


module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin(),
    new CopyWebpackPlugin([
      { from: 'client/assets', to: 'client/assets' }
    ])
  ]
});
