const ErrorHanding = require("../utils/errorHanding");

//处理mongodb 非法字段错误
function errHandleDB(err) {
  const message = `非法字段 ${err.path}: ${err.value}`;
  return new ErrorHanding(message, 400);
}

//处理mongodb 数据重复错误
function validateRepeatHanding(err) {
  const message = `${Object.keys(err.keyPattern)} 字段已存在`;
  return new ErrorHanding(message, 400);
}

//处理mongodb数据验证错误
function ValidatorError(err) {
  const messages = Object.values(err.errors).map((el) => el.message);
  return new ErrorHanding(`字段错误：${messages.join("; ")}`, 400);
}

//token 错误处理
function tokenHandle() {
  return new ErrorHanding("身份验证失败", 401);
}

// token 过期处理
function expiredToken() {
  return new ErrorHanding("身份已过期", 401);
}

function sendErrorPrd(err, res) {
  //isOperational 用来标记是否为意外错误
  if (err.isOperational) {
    res
      .status(err.statusCode)
      .json({ status: err.status, message: err.message });
  } else {
    //处理未知错误
    res.status(500).json({
      status: "error",
      message: "发生了一些错误",
    });
  }
}

function sendErrorDev(err, res) {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    stack: err.stack,
    message: err.message,
  });
}

module.exports = (err, req, res, next) => {
  console.log("express 处理错误中间件");
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    //处理mongodb错误
    if (err.name === "CastError") {
      error = errHandleDB(err);
    }
    //处理mongodb字段重复
    if (err.code === 11000) {
      error = validateRepeatHanding(err);
    }
    //处理mongodb字段验证错误
    if (err.name === "ValidationError") {
      error = ValidatorError(err);
    }
    // 处理 错误token
    if (err.name === "JsonWebTokenError") {
      error = tokenHandle();
    }
    // 处理过期token
    if (err.name === "TokenExpiredError") {
      error = expiredToken();
    }
    sendErrorPrd(error, res);
  } else if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  }
};
