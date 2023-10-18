// development config
process.env.NODE_ENV = "development";

const { merge } = require("webpack-merge");
// const webpack = require("webpack");
const commonConfig = require("./common");
const paths = require("../paths");

module.exports = merge(commonConfig, {
  mode: "development",
  devServer: {
    open: false,
    // hot: true,
    compress: true,
    port: 8081,
    static: {
      directory: paths.build,
    },
    // contentBase: paths.build,
    historyApiFallback: true, // fixes error 404-ish errors when using react router :see this SO question: https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url
  },
  devtool: "source-map",
  // devtool: "inline-source-map",
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin(), // enable HMR globally
  // ],
});
