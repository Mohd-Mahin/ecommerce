const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    compress: true,
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:14000",
        changeOrigin: true,
      },
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
});
