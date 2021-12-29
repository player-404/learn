module.exports = {
  entry: "./index.js",
  output: {
    path: `${__dirname}/out`,
    filename: "out.js",
    //修改图片输出的文件名与路径
    // assetModuleFilename: "images/[name][ext][query]",
    //清理dist文件夹
    clean: true,
  },
  module: {
    rules: [
      // 打包css
      {
        test: /\.css$/i,
        use: ["style-loader", "postcss-loader", "css-loader"],
      },
      // 打包scss
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      //打包图片：webpack5 使用资源模块: asset 通用资源
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        type: "asset",
        generator: {
          filename: "static/[name].[ext][query]",
        },
        // 根据设置的大小自动选择 resource / inline 资源模块进行打包
        parser: {
          dataUrlCondition: {
            maxSize: 1024 * 30,
          },
        },
      },
      //打包字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "font/[name].[ext][query]",
        },
      },
    ],
  },
};
