const express = require('express');
const fs = require('fs');
//创建应用
const app = express();

//中间件
app.use(express.json());
//获取数据
const data = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, 'utf-8')
);

/* //获取tours api下的所有数据
app.get('/api/v1/tours', (req, res) => {
  res
    .status(200)
    .json({ status: '数据获取成功', result: data.length, data: { data } });
});

//获取tours 不同id下的数据
app.get('/api/v1/tours/:id', (req, res) => {
  //获取id参数
  const id = req.params.id * 1;
  //获取tours 相应id下的数据
  const tours = data.find((item) => item.id === id);
  //输入id错误
  if (!tours) {
    return res.status(404).json({ status: '404 Not found', message: '非法id' });
  }
  //返回相应id哦数据
  return res.status(200).json({ status: 200, data: { tours } });
});

//增加tours api下的资源
app.post('/api/v1/tours', (req, res) => {
  //获取传递过来的数据
  const reqData = req.body;
  console.log('data', reqData);
  const id = data.length;
  const newTours = Object.assign({ id: id }, reqData);
  //合并数据
  data.push(newTours);
  //写入数据
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(data),
    'utf-8',
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send('done');
      }
    }
  );
});

//修改tours api下的资源
app.patch('/api/v1/tours/:id', (req, res) => {
  const id = req.params.id * 1;
  if (!id || id > data.length) {
    return res.status(404).json({ status: '更新失败', message: '非法id' });
  }
  const datas = req.body;
  res.status(200).json({ status: '数据更新成功', data: { datas } });
});

//删除tours api下的数据
app.delete('/api/v1/tours/:id', (req, res) => {
  const id = req.params.id * 1;
  if (!id || id > data.length) {
    return res.status(404).json({ status: '删除数据失败', message: '非法id' });
  }
  res.status(204).json({ status: '删除数据成功', data: null });
}); */

//获取全部数据
const getAllTours = (req, res) => {
  res.status(200).json({
    status: '数据获取成功',
    requetTimeAt: req.requestTime,
    result: data.length,
    data: { data },
  });
};

//获取id下数据
const getTours = (req, res) => {
  //获取id参数
  const id = req.params.id * 1;
  //获取tours 相应id下的数据
  const tours = data.find((item) => item.id === id);
  //输入id错误
  if (!tours) {
    return res.status(404).json({ status: '404 Not found', message: '非法id' });
  }
  //返回相应id哦数据
  return res.status(200).json({ status: 200, data: { tours } });
};

//增加数据
const addTours = (req, res) => {
  //获取传递过来的数据
  const reqData = req.body;
  console.log('data', reqData);
  const id = data.length;
  const newTours = Object.assign({ id: id }, reqData);
  //合并数据
  data.push(newTours);
  //写入数据
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(data),
    'utf-8',
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send('done');
      }
    }
  );
};

//更新数据
const updateTours = (req, res) => {
  const id = req.params.id * 1;
  if (!id || id > data.length) {
    return res.status(404).json({ status: '更新失败', message: '非法id' });
  }
  const datas = req.body;
  res.status(200).json({ status: '数据更新成功', data: { datas } });
};

//删除数据
const delTours = (req, res) => {
  const id = req.params.id * 1;
  if (!id || id > data.length) {
    return res.status(404).json({ status: '删除数据失败', message: '非法id' });
  }
  res.status(204).json({ status: '删除数据成功', data: null });
};
//创建一个自己的中间件
app.use((req, res, next) => {
  console.log('中间件被执行');
  next();
});
//中间件：获取请求时间
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.route('/api/v1/tours').get(getAllTours).post(addTours);
app
  .route('/api/v1/tours/:id')
  .get(getTours)
  .patch(updateTours)
  .delete(delTours);
//监听端口
const port = 8000;
app.listen(port, () => {
  console.log('server is listening on 8000');
});
