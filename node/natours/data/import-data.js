const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const Tour = require("../models/tourModels");

//关闭数据库连接
const close = async () => {
  mongoose.connection.close();
  console.log("数据库已关闭连接");
};
//导入数据
const importData = async (data) => {
  try {
    await Tour.create(data);
    console.log("数据导入成功");
  } catch (err) {
    console.log(err);
    console.log("数据导入失败");
  }
  close();
};

//删除数据
const delData = async () => {
  try {
    await Tour.deleteMany();
    console.log("数据删除成功");
  } catch (err) {
    console.log(err);
    console.log("数据删除失败");
  }
  close();
};

dotenv.config({ path: "../config.env" });

//import 导入数据 delete 删除数据
const type = process.argv[2];

//读取数据文件
const data = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, "utf-8")
);

//连接mongodb
mongoose.connect(process.env.DATABASE_SERVER).then(() => {
  console.log("数据库已连接");
});

if (type === "--import") {
  importData(data);
}

if (type === "--delete") {
  //读取数据
  delData();
}
