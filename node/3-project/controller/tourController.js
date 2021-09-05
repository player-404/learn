const fs = require('fs');

//获取数据
const data = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, 'utf-8')
);

exports.checkBody = (req, res, next) => {
  const { name, price } = req.body;
  if (!name || !price) return res.status(404).json({ status: 'not found' });
  next();
};

exports.checkId = (req, res, next, id) => {
  if (id > data.length) {
    return res.status(404).json({ status: 'fail', message: 'Invalid' });
  }
  next();
};

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
  const datas = req.body;
  res.status(200).json({ status: '数据更新成功', data: { datas } });
};

//删除数据
exports.delTour = (req, res) => {
  res.status(204).json({ status: '删除数据成功', data: null });
};
