module.exports = {
  //入口文件(可以是相对路径)
  entry: "./src/index.js",
  //出口文件(必须是绝对路径)
  output: {
    //路径
    path: `${__dirname}/out`,
    //文件名
    filename: "out.js",
  },
};
