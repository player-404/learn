module.exports = {
  // 入口
  entry: "./index.js",
  // 打包文件输出路径
  output: {
    path: `${__dirname}/out`,
    filename: "out.js",
  },
  // loader
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", " css-loader"],
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
};
