const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

console.log(path.join(__dirname, '/app/backend/static'))
module.exports = {
  context: __dirname,
  entry: ['./app/frontend/App.jsx'],
  output: {
    path: path.join(__dirname, '/app/backend/static'),
    filename: 'bundle.js'
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'Webpack'
    // })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
