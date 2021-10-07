/* exports.checkUserId = (req, res, next, id) => {
  if (id > data.length) {
    return res
      .status(404)
      .json({ status: "fail", data: { data: "404 not found" } });
  }
  next();
}; */

//获取指定用户数据
exports.getUser = (req, res) => {
  console.log(req.params.id);
  res
    .status(200)
    .json({ status: "success", data: { data: "获取指定id的用户数据" } });
};

//获取全部用户数据
exports.getUsers = (req, res) => {
  res
    .status(200)
    .json({ status: "success", data: { data: "获取全部用户数据" } });
};

//创建用户数据
exports.createUser = (req, res) => {
  console.log(req.body);
  res.status(200).json({ status: "success", data: { data: "创建用户数据" } });
};

//更新用户数据
exports.updateUser = (req, res) => {
  console.log("更新用户数据id", req.params.id);
  res.status(200).json({ status: "success", data: { data: "更新用户数据" } });
};

//删除用户数据
exports.delUser = (req, res) => {
  console.log("删除用户数据id", req.params.id);
  res.status(200).json({ status: "success", data: { data: "删除用户数据" } });
};
