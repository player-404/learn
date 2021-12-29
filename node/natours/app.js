const express = require("express");
const usersRouter = require("./routers/userRouters");
const tourRouter = require("./routers/tourRouter");
const morgan = require("morgan");
const ErrorHanding = require("./utils/errorHanding");
const errorCon = require("./controller/errorController");
const app = express();
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 20,
  message: "您的访问次数过多，请稍后再试!",
});

//中间件
app.use(express.json());

app.use(morgan("dev"));
//设置http头（安全相关）
app.use(helmet());
// 防止nosql注入
app.use(mongoSanitize());
// 防止xss攻击
app.use(xss());
// http安全等方面的一些设置
app.use(
  // 过滤链接中的重复字段， whitelist为白名单， 是一个数组
  hpp({
    whitelist: ["price", "duration", "ratingsAverage", "ratingsQuantity"],
  })
);
//限制访问速率
app.use(limiter);

//router
app.use("/api", limiter); // 限制api路由下，同一个ip每分钟只能访问20次
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/tours", tourRouter);

// 处理错误URL
app.use("*", (req, res, next) => {
  // 跳转至处理错误的中间件
  next(new ErrorHanding(`${req.originalUrl} is not found`, 404));
});

app.use(errorCon);

module.exports = app;
