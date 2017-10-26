const path = require('path')
const webpack = require('webpack')
console.log(path.resolve(__dirname, 'app/backend/templates/img/loading.png'))

const config = {
  context: __dirname,
  entry: ['./app/frontend/App.jsx'],
  output: {
    path: path.join(__dirname, '/app/backend/static'),
    filename: 'main.js'
  },
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
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: '/images/[name]_[sha512:hash:base64:7].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              optipng: {
                optimizationLevel: 7
              },
              pngquant: {
                quality: '65-90'
              },
              mozjpeg: {
                quality: 65
              }
            }
          }
        ]
      }
    ]
  }
}
module.exports = config
