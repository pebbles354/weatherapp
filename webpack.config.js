const path = require('path');

module.exports = {
  mode: 'development',
  devtool: "source-map",
  devServer: {
    contentBase: './dist',
  },

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};