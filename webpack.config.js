const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 32',
  'Firefox >= 28',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1'
];

module.exports = {
  entry: {
      css:"./loading-animation.css"
  },
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test:   /\.css$/,
        loader:  ExtractTextPlugin.extract("style","css!postcss")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('loading-animation.css')
  ],
  postcss: function (webpack) {
    return [
      require("postcss-import")({
        addDependencyTo: webpack
      }),
      require("postcss-apply")(),
      require("postcss-cssnext")({
        browsers:AUTOPREFIXER_BROWSERS
      })
    ];
  }
};
