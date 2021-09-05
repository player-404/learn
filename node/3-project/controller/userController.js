//users路由函数
const data = require(`${__dirname}/../dev-data/data/users.json`);

exports.checkUserID = (req, res, next, id) => {
  if (id > data.length) return res.status(404).json({ status: 'fail' });
  next();
};
//获取全部用户数据
exports.getAllUsers = (req, res) => {
  res
    .status(200)
    .json({ status: 'success', data: { data: '获取所有用户数据' } });
};

//新建用户
exports.createUser = (req, res) => {
  res.status(200).json({ status: 'success', data: { data: '创建用户' } });
};

//获取指定id数据
exports.getUser = (req, res) => {
  res
    .status(200)
    .json({ status: 'success', data: { data: '获取用户数据成功' } });
};

//更新指定用户数据
exports.updateUser = (req, res) => {
  res
    .status(200)
    .json({ status: 'success', data: { data: '更新用户数据成功' } });
};

//删除用户数据
exports.delUser = (req, res) => {
  const id = req.params.id * 1;

  res
    .status(200)
    .json({ status: 'success', data: { data: '删除用户数据成功' } });
};
