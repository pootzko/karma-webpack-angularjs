var path = require("path");

const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  context: path.join(__dirname),
  entry: "./src/boot.ts",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      },
      {
        test: /\.tsx?$/,
        use: [{
          loader: "ts-loader",
          options: {
            transpileOnly: true,
            exclude: /node_modules/
          }
        }]
      },
      {
        test: /\.html$/,
        loaders: "html-loader",
        options: {
          attrs: [":data-src"],
          minimize: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "common": path.resolve(__dirname, "src/app/common"),
      "common/*": path.resolve(__dirname, "src/app/common/*"),
      "modules": path.resolve(__dirname, "src/app/modules"),
      "modules/*": path.resolve(__dirname, "src/app/modules/*"),
    }
  },
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    hot: false,
    contentBase: path.resolve(__dirname, "dist")
  }
};