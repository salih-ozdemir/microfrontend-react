// home/webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    port: 3001
  },
  output: {
    publicPath: 'auto'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: { presets: ['@babel/preset-react'] }
    }]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'home',
      filename: 'remoteEntry.js',
      exposes: {
        './Home': './src/Home.jsx'
      },
      shared: {
        react: { singleton: true, requiredVersion: '^17.0.2' },
        'react-dom': { singleton: true, requiredVersion: '^17.0.2' }
      }
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ]
};