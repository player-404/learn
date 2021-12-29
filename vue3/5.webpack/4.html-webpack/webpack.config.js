const htmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  //入口
  entry: "./index.js",
  //出口
  output: {
    path: `${__dirname}/dist`,
    filename: "[name].boundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\,(jpe?g|png|svg|gif)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 1024 * 10,
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      title: "my app",
      inject: "body",
    }),
    new DefinePlugin({
      BASE_URL: JSON.stringify("./"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./2.jpg",
          to: "imgssss",
        },
        {
          from: "public/3.jpg",
          to: "img1",
        },
      ],
    }),
  ],
};
