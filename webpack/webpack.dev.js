const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../build'),
    // filename: 'bundle.js'
    filename: 'bundle.[contenthash].js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '../', '.env.development'),
    })
  ],
  devServer: {
    contentBase: '../build',
    port: 8082
  },
})
