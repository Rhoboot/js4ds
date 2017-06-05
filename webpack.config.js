const path = require('path')

const config = {
  entry: './src/stack/front/app',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      options: {
        presets: ["react-app"]
      }
    }]
  },
  devtool: 'source-map'
}

module.exports = config
