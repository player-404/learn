const fs = require('fs');

//获取数据
const data = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, 'utf-8')
);

//获取全部数据
exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: '数据获取成功',
    requetTimeAt: req.requestTime,
    result: data.length,
    data: { data },
  });
};

//获取id下数据
exports.getTour = (req, res) => {
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
exports.addTour = (req, res) => {
  //获取传递过来的数据
  const reqData = req.body;
  console.log('data', reqData);
  const id = data.length;
  const newTours = Object.assign({ id: id }, reqData);
  //合并数据
  data.push(newTours);
  //写入数据
  fs.writeFile(
    `${__dirname}/../dev-data/data/tours-simple.json`,
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
exports.updateTour = (req, res) => {
  const id = req.params.id * 1;
  if (!id || id > data.length) {
    return res.status(404).json({ status: '更新失败', message: '非法id' });
  }
  const datas = req.body;
  res.status(200).json({ status: '数据更新成功', data: { datas } });
};

//删除数据
exports.delTour = (req, res) => {
  const id = req.params.id * 1;
  if (!id || id > data.length) {
    return res.status(404).json({ status: '删除数据失败', message: '非法id' });
  }
  res.status(204).json({ status: '删除数据成功', data: null });
};
