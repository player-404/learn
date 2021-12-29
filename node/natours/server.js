const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// 其他普通错误 放在最前 避免发生错误时，该事件没有注册，导致无法捕获错误
process.on("uncaughtException", (err) => {
  console.log("意外错误 💥");
  console.log(`error: ${err.name}: ${err.message}`);
  server.close(() => {});
});

dotenv.config({ path: "./config.env" });

//连接mongodb
mongoose.connect(process.env.DATABASE_SERVER).then(() => {
  console.log("mongoose is connected");
});

port = process.env.PORT || 3000;
const server = app.listen(port, "localhost", () => {
  console.log("server is running at port 8000");
});

//当node中出现错误时， 会执行该函 数的回调函数
//每当 Promise 被拒绝并且在事件循环的一个轮询内没有错误句柄附加到承诺时，则会触发 'unhandledRejection' 事件
process.on("unhandledRejection", (err) => {
  console.log(`error: ${err.name}: ${err.message}`);
  //优雅的关闭node进程
  server.close(() => {
    //关闭node进程
    process.exit(1);
  });
});
