const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, "../src", "index.js")
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset/resource',
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      appMountId: 'root',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
    })
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  }
}

