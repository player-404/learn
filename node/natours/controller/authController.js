const catchAsync = require("../utils/catchAsync");
const ErrorHanding = require("../utils/errorHanding");
const User = require("../models/userModel");
const { promisify } = require("util");
// josnwebtokens
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const sendEmail = require("../utils/email");

// 生成token
const signToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SERCET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

// 返回用户数据
const createUserToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  // express res.cookie option 选项
  const cookieOption = {
    httpOnly: true,
    //过期时间
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
    ),
  };
  // secure: cookie只能在https中使用
  if (process.env.NODE_ENV === "production") cookieOption.secure = true;
  // 将cookie返回客户端
  try {
    res.cookie("jwt", token, cookieOption);
  } catch (err) {
    res.status(500).json({ status: "fail", message: "cookie生成失败" });
  }
  res.status(statusCode).json({ status: "success", token, data: { user } });
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
  if (!newUser) return next(new ErrorHanding("用户注册失败", 500));
  createUserToken(newUser, 200, res);
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
  createUserToken(user, 200, res);
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
  console.log("token", req.headers.authorization);
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

//忘记密码
exports.forgetPassword = catchAsync(async (req, res, next) => {
  // 1) 获取忘记密码邮箱
  const { email } = req.body;
  if (!email) return next(new ErrorHanding("请输入email", 400));

  // 2）从数据库中查找该账号数据
  const user = await User.findOne({ email });
  if (!user) return next(new ErrorHanding("用户不存在", 400));

  // 3) 将 passwordResetToken 保存在数据库
  const passwordToken = user.createPasswordResetToken();
  console.log("passwordToken", passwordToken);

  // 4) 向用户发送有重置密码邮件
  const restURL = `${req.protocol}://${req.host}/api/v1/resetPassword/${passwordToken}`;
  const message = `忘记密码？点击下面链接进行重置: ${restURL}`;

  try {
    await sendEmail({ to: user.email, subject: "密码重置", text: message });
    await user.save();
    //返回数据
    res.status(200).json({ status: "success" });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.resetTokenExpires = undefined;
    await user.save();
    return next(new ErrorHanding("邮件发送失败，请稍后重试", 500));
  }
});

//重置密码
exports.resetPassword = async (req, res, next) => {
  // 1) 验证token 是否与数据库中的token一致 且 token没有过期
  const token = req.params.token;
  const restToken = crypto.createHash("sha256").update(token).digest("hex");
  //查找含有重置密码token(该token加密了)与token过期时间大于现在时间的用户数据，没有找到则token错误或过期
  const user = await User.findOne({
    passwordResetToken: restToken,
    resetTokenExpires: { $gt: Date.now() },
  });
  if (!user) {
    return next(new ErrorHanding("非法token或token已过期", 400));
  }

  // 2) 验证通过 保存修改的密码 创建新的token
  const { password, passwordConfirm } = req.body;
  user.password = password;
  user.passwordConfirm = passwordConfirm;
  user.passwordResetToken = undefined;
  user.resetTokenExpires = undefined;

  // 3) 保存数据到数据库
  await user.save();

  //4) 生成新的token 返回结果
  createUserToken(user, 200, res);
};

// 更新密码
exports.updatePassword = catchAsync(async (req, res, next) => {
  // 1) 验证当前用户密码是否正确
  const { currentPassword, password, passwordConfirm } = req.body;
  const user = await User.findById(req.user._id).select("+password");
  const status = await user.checkPassword(currentPassword, user.password);
  if (!status) return next(new ErrorHanding("密码错误", 401));

  // 2）密码验证通过
  user.password = password;
  user.passwordConfirm = passwordConfirm;
  await user.save();

  // 3) 生成新的token
  createUserToken(user, 200, res);
});
