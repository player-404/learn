module.exports = {
  entry: "./index.js",
  output: {
    path: `${__dirname}/out`,
    filename: "[name].boundle.js",
    clean: true,
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
