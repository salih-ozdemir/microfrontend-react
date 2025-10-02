const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: { port: 3002 },
  output: { publicPath: "auto" },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-react"] }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "common",
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/Header.jsx",
        "./Footer": "./src/Footer.jsx",
        "./Button": "./src/Button.jsx",
        "./utils": "./src/utils.js"
      },
      shared: {
        react: { singleton: true, requiredVersion: "^17.0.2" },
        "react-dom": { singleton: true, requiredVersion: "^17.0.2" }
      }
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" })
  ]
};