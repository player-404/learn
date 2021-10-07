const Tour = require("../models/tourModels");
const ApiFeature = require("../utils/apiFeature");
const catchAsync = require("../utils/catchAsync");
const ErrorHanding = require("../utils/errorHanding");

//中间件：查询评分最高且便宜的五个旅行目的地
exports.topCheap5 = (req, res, next) => {
  req.query.limit = 5; //限制查询数据为5条
  req.query.sort = "-ratingsAverage,price"; //选取评分最高的5条，且按照price升序排序
  req.query.filter = "name,price,ratingsAverage,summary"; //限制字段
  next();
};

//获取全部旅游数据
exports.getTours = catchAsync(async (req, res, next) => {
  const feature = new ApiFeature(Tour.find(), req.query)
    .filter()
    .sort()
    .limit()
    .paging();
  //返回查询数据
  const toursAllData = await feature.query;
  // console.log("all data", toursAllData);
  res.status(200).json({
    status: "get success",
    results: toursAllData.length,
    data: { data: toursAllData },
  });
});

//获取指定数据
exports.getTour = catchAsync(async (req, res, next) => {
  const tourData = await Tour.findById(req.params.id);
  //添加404错误处理
  if (!tourData) {
    return next(new ErrorHanding("tour ID is not found", 404));
  }
  //findById = findOne({_id: id})简写
  res.status(200).json({ status: "get success", data: { data: tourData } });
});

//创建旅游数据
exports.createTour = catchAsync(async (req, res, next) => {
  const tourData = await Tour.create(req.body);
  res.status(200).json({ status: "create success", data: { data: tourData } });
});

//更新数据
exports.updateTour = catchAsync(async (req, res, next) => {
  const data = await Tour.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    //开启数据验证
    runValidators: true,
  });
  //new: true返回更新后的数据返回
  //runValidators: 验证更新值的type是否符合要求

  //添加404错误处理
  if (!data) {
    return next(new ErrorHanding("tour id is not found", 404));
  }
  res.status(200).json({ status: "update success", data: { data: data } });
});

//删除数据
exports.delTour = catchAsync(async (req, res, next) => {
  const data = await Tour.findByIdAndDelete(req.params.id, {
    rawResult: true,
  });
  //rawResult: 返回删除的数据

  //添加404错误处理
  if (!data) {
    return next(new ErrorHanding("tour id is not found", 404));
  }
  res.status(200).json({ status: "delete success", data: { data: data } });
});

exports.tourStats = catchAsync(async (req, res) => {
  const stats = await Tour.aggregate([
    //pipeline
    {
      $match: { ratingsAverage: { $gte: 4 } },
    },
    //stages
    {
      //分组
      $group: {
        //以哪个字段分组，null不分组
        _id: "$difficulty",
        //$sum 求总和
        sum: { $sum: 1 },
        //$avg 求平均数
        ratingAvg: { $avg: "$ratingsAverage" },
        priceAvg: { $avg: "$price" },
        priceSum: { $sum: "$price" },
        minPrice: { $min: "$price" },
        maxPrice: { $max: "$price" },
        name: { $push: "$name" },
      },
    },
    {
      $sort: { ratingAvg: -1 },
    },
  ]);
  res.status(200).json({ status: "success", data: { stats } });
});

//按月份分类数据
exports.tourTime = catchAsync(async (req, res) => {
  const year = req.params.year * 1;
  const tours = await Tour.aggregate([
    {
      //展开文档数据中的数组
      $unwisdnd: "$startDates",
    },
    {
      //匹配数据
      $match: {
        startDates: {
          $gte: new Date(`${year}-01-01`),
          $lte: new Date(`${year}-12-31`),
        },
      },
    },
    {
      //分类
      $group: {
        _id: {
          $month: "$startDates",
        },
        name: { $push: "$name" },
        resultNum: { $sum: 1 },
      },
    },
    {
      //添加属性字段
      $addFields: {
        month: "$_id",
      },
    },
    {
      //控制返回数据字段是否显示： 0 不显示 1 显示
      $project: {
        _id: 0,
      },
    },
    {
      //排序
      $sort: {
        resultNum: -1,
      },
    },
  ]);
  res.status(200).json({ status: "success", data: { data: tours } });
});
