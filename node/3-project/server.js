const dotenv = require('dotenv');
const mongoose = require('mongoose');
//将配置文件的内容写入node环境变量
dotenv.config({ path: './config.env' });
const app = require('./app');

mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log('mongondb was connected');
});
//监听端口
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
