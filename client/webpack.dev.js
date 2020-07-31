const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:14000",
        changeOrigin: true,
      },
    },
  },
});
