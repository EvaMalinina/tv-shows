const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, "../src", "index.js")
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.html/,
        use: ['html-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: ["ts-loader"]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', ".json"]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
  ],
}
