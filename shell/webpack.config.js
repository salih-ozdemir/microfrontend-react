const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: { port: 3000 },
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
      name: "shell",
      remotes: {
        home: "home@http://localhost:3001/remoteEntry.js",
        common: "common@http://localhost:3002/remoteEntry.js"
      },
      shared: {
        react: { singleton: true, requiredVersion: "^17.0.2" },
        "react-dom": { singleton: true, requiredVersion: "^17.0.2" }
      }
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" })
  ]
};