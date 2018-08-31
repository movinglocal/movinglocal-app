const Path = require('path');
const Webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common.js');
const config = require('../config');

const publicPath = process.env.BASENAME || '/';

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: Path.resolve(__dirname, 'build'),
    compress: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    publicPath
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new HtmlWebpackPlugin({
      inject: true,
      meta: config.meta,
      title: config.title,
      template: Path.resolve(__dirname, '../src/index.html')
    })
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: Path.resolve(__dirname, '../src'),
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        }
      },
      {
        test: /\.(js|jsx)$/,
        include: Path.resolve(__dirname, '../src'),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
});
