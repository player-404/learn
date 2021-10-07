const express = require("express");
const usersRouter = require("./routers/userRouters");
const tourRouter = require("./routers/tourRouter");
const morgan = require("morgan");
const ErrorHanding = require("./utils/errorHanding");
const errorCon = require("./controller/errorController");
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/tours", tourRouter);

// 处理错误URL
app.use("*", (req, res, next) => {
  // 跳转至处理错误的中间件
  next(new ErrorHanding(`${req.originalUrl} is not found`, 404));
});
app.use(errorCon);

module.exports = app;
