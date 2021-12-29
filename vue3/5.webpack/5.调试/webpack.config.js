const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { DefinePlugin } = require("webpack");

const argv = process.env.NODE_ENV ?? "development";
console.log(argv);
module.exports = {
  entry: "./index.js",
  mode: argv,
  devtool: "source-map",
  output: {
    path: `${__dirname}/out`,
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
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: "imgs/[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "my webpack",
      template: "./index.html",
      inject: "body",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "1.jpg",
          to: "imgs",
          globOptions: { gitignore: true },
        },
      ],
    }),
    new DefinePlugin({
      BASE_URL: JSON.stringify("imgs/"),
    }),
  ],
};
