const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const utils = require('./utils');

const isProd = process.env.NODE_ENV === "production";

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  devtool: isProd ? false : "#cheap-module-source-map",
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/dist/",
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": resolve("src")
    }
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "[name].[ext]?[hash]"
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.scss$/,
        use: isProd
          ? ExtractTextPlugin.extract({
              use: [
                {
                  loader: "css-loader",
                  options: {
                    minimize: true,
                  }
                },
                "sass-loader",
              ],
              fallback: "vue-style-loader"
            })
          : ["vue-style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: isProd ? "warning" : false
  },
  plugins: isProd
    ? [
        new VueLoaderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false }
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new ExtractTextPlugin({
          filename: utils.assetsPath('css/[name].[contenthash].css'),
        })
      ]
    : [
      new VueLoaderPlugin(),
      new FriendlyErrorsPlugin(),
    ]
};
