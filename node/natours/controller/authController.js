const catchAsync = require("../utils/catchAsync");
const ErrorHanding = require("../utils/errorHanding");
const User = require("../models/userModel");
const { promisify } = require("util");
// josnwebtokens
const jwt = require("jsonwebtoken");

// 生成token
const signToken = (userId, sercet, expiresIn) => {
  return jwt.sign({ id: userId }, sercet, { expiresIn });
};

//用户注册
exports.singup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  console.log("_id", newUser.id);
  // 生成token
  const token = signToken(
    newUser._id,
    process.env.JWT_SERCET,
    process.env.JWT_EXPIRES
  );

  if (!token) return next(new ErrorHanding("token生成失败", 500));
  if (!newUser) return next(new ErrorHanding("用户注册失败", 500));
  res.status(200).json({ status: "success", data: { user: newUser, token } });
});

// 用户登录
exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  // 1) 判断是否有输入值
  if (!email || !password) {
    return next(new ErrorHanding("用户名或密码不能为空"), 401);
  }
  // 2）验证账号密码
  const user = await User.findOne({ email }).select("+password");
  // 验证失败 返回错误信息
  if (!user || !(await user.checkPassword(password, user.password))) {
    return next(new ErrorHanding("邮箱或用户名错误", 401));
  }

  // 3）验证成功返回token
  const token = signToken(
    user._id,
    process.env.JWT_SERCET,
    process.env.JWT_EXPIRES
  );
  res.status(200).json({ status: 200, data: { token, message: "登录成功" } });
};

// 用户更新
exports.update = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const update = await User.updateOne({ id: id }, req.body);
  console.log(update);
  res.status(200).json({ status: "success" });
});

// 登录验证
exports.isLogin = catchAsync(async (req, res, next) => {
  let token;
  // 1) 判断是发送了token
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer")
  ) {
    return next(new ErrorHanding("token 不存在", 401));
  }

  // 2) 获取token
  token = req.headers.authorization.split(" ")[1];

  // 3）验证token promisify：将回调函数形式的函数转换成 promise 形式的函数
  const deCode = await promisify(jwt.verify)(token, process.env.JWT_SERCET);
  console.log("deCode", deCode);

  // 4） 查找用户是否存在
  const queryUser = await User.findById(deCode.id);
  if (!queryUser) {
    return next(new ErrorHanding("用户不存在", 401));
  }

  // 5) 判断密码是否该改变
  if (queryUser.checkPassowrdChange(deCode.iat)) {
    return next(new ErrorHanding("用户密码已更改, 请重新登录", 401));
  }
  // 6) 验证成功
  req.user = queryUser;
  next();
});

// 用户角色认证
exports.rolesabundant = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.roles)) {
      return next(new ErrorHanding("当前用户权限不足", 401));
    }
    next();
  };
};
