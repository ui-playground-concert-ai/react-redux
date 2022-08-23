const HtmlWebpackPlugin = require("html-webpack-plugin");

const deps = require("./package.json");
module.exports = {
  mode: "development",
  devServer: {
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".scss", ".json"],
  },
};
