const { VueLoaderPlugin } = require("vue-loader/dist/index");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  target: "web",
  entry: "./main.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "[name]-boundle.js",
    clean: true,
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    open: true,
    client: {
      progress: true,
    },
    //热更新
    hot: true,
    //压缩：加速
    compress: true,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        secure: true,
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      //将符号@映射为src目录的绝对路径
      "@": path.resolve(__dirname, "src"),
    },
    // 以下文件在导入时，可以省略后缀名
    extensions: ["js", "vue", "ts", "jsx"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.vue$/i,
        loader: "vue-loader",
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 1024 * 99999999999999999,
          },
        },
        generator: {
          filename: "static/[name].[ext][query]",
        },
      },
    ],
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./index.html",
        title: "vue app",
        inject: "body",
      }),
      new VueLoaderPlugin(),
    ],
  },
};
