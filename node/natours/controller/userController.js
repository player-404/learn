/* exports.checkUserId = (req, res, next, id) => {
  if (id > data.length) {
    return res
      .status(404)
      .json({ status: "fail", data: { data: "404 not found" } });
  }
  next();
}; */

const catchAsync = require("../utils/catchAsync");
const ErrorHanding = require("../utils/errorHanding");
const User = require("../models/userModel");
//过滤更新用户数据的字段
const filterObj = (obj, ...updateAttribute) => {
  console.log("obj", obj);
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    if (updateAttribute.includes(key)) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};

//获取指定用户数据
exports.getUser = (req, res) => {
  console.log(req.params.id);
  res
    .status(200)
    .json({ status: "success", data: { data: "获取指定id的用户数据" } });
};

//获取全部用户数据
exports.getUsers = catchAsync(async (req, res, next) => {
  const users = await User.find({});
  res.status(200).json({ status: "success", data: { user: users } });
});

//创建用户数据
exports.createUser = (req, res) => {
  console.log(req.body);
  res.status(200).json({ status: "success", data: { data: "创建用户数据" } });
};

//更新用户数据
exports.updateUser = catchAsync(async (req, res, next) => {
  // 1) 确认是否传入用户数据
  if (req.body.password || req.body.passwordConfirm)
    return next(
      new ErrorHanding(
        "此处不支持更新密码，请到路由 /updatePassword 中更新",
        401
      )
    );

  //2) 过滤需要更新的用户数据字段
  const filterData = filterObj(req.body, "name", "email");

  //3）更新用户数据
  const updateUser = await User.findByIdAndUpdate(req.user._id, filterData, {
    new: true,
    runValidators: true,
  });

  //  4） 返回客户端消息
  res.status(200).json({ status: "success", data: { user: updateUser } });
});

//删除用户数据
exports.delUser = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user._id, { active: false });
  res.status(204).json({ status: "success", data: null });
});
