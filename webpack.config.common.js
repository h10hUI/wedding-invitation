const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');

const entries = {
  app: './src_client/app',
  css: './src/scss/main.scss'
}

module.exports = {
  entry: {
    app: [
      entries.app,
      entries.css
    ]
  },
  output: {
    path: path.join(__dirname, './views/dist/js'),
    publicPath: '/dist/js',
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ]
            }
          }
        ],
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
          }
        ],
      }
    ]
  },
  resolve: {
    modules: ['./', 'node_modules'],
  },
  plugins: [
    new Dotenv({
      systemvars: true,
    }),
  ]
};
