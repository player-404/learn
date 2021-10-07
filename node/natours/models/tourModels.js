const mongoose = require("mongoose");

//创建 schema 模式: Mongoose 的一切始于 Schema。每个 schema 都会映射到一个 MongoDB collection ，并定义这个collection里的文档的构成
const tourSchema = new mongoose.Schema(
  {
    //指定字段
    //旅游名称
    name: {
      //字段类型
      type: String,
      //不可缺省，第二个参数为错误时输出的error
      required: [true, "name 字段不可缺省"],
      //是否为唯一字段
      unique: true,
      // 字段验证
      maxLength: [20, "name长度不能大于20"],
      // 字段验证
      minLength: [2, "name长度不能小于2"],
    },
    //旅游持续时间
    duration: {
      type: Number,
      // 字段验证
      required: [true, "duration 字段不可缺省"],
    },
    //平均评分
    ratingsAverage: {
      type: Number,
      //默认值
      default: 0,
      // 字段验证
      min: [0, "评分不能小于0"],
      // 字段验证
      max: [5, "评分不能大于5"],
    },
    //总体评分
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    //价格
    price: {
      type: Number,
      // 字段验证
      required: [true, "price参数不可缺省"],
    },
    //折扣
    priceDiscount: {
      type: Number,
      validate: {
        validator: function (v) {
          return v < this.price;
        },
        message: "折扣价格不能大于原价格",
      },
    },
    //总结
    summary: {
      type: String,
      trim: true, //trim 去除空白符
      require: [true, "summary 字段不可缺省"],
    },
    //旅游团人数
    maxGroupSize: {
      type: Number,
      default: 4,
    },
    description: {
      type: String,
      trim: true,
    },
    //图片封面
    imgCover: {
      type: String,
      require: [true, "imgCover 不可缺省"],
    },
    //其他图片
    images: [String], //[String]表示字段接受一个字符串数组
    //创建时间
    createAt: {
      type: Date,
      default: Date.now(), //自动创建时间
      select: false,
    },
    slug: String,
    tourSecret: {
      type: Boolean,
      default: false,
    },
    //开始时间
    startDates: [Date], // 接受一个 Date数组
    difficulty: {
      type: String,
      // 字段验证
      enum: {
        values: ["easy", "medium", "difficult"],
        message: "difficulty字段只能为 easy,medium,diffcult",
      },
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

//虚拟属性
tourSchema.virtual("durationWeek").get(function () {
  return this.duration / 7;
});

//中间件
//文档中间件
//pre：之前触发 save 保存数据 与 create 方法之前触发该钩子
tourSchema.pre("save", function (next) {
  console.log("pre fun is running");
  this.slug = this.name.toLowerCase();
  next();
});

//post 之后触发
tourSchema.post("save", function (doc, next) {
  next();
});

// 聚合中间件 this指向当前聚合对象
tourSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { tourSecret: { $ne: true } } });
  next();
});

tourSchema.pre(/^find/, function (next) {
  this.start = Date.now();
  next();
});

tourSchema.post(/^find/, function (doc, next) {
  const costTime = Date.now() - this.start;
  console.log("query is cost", costTime);
  next();
});

//创建 模型 model: 模型是根据模式定义编译的奇特构造函数
const Tour = mongoose.model("Tour", tourSchema);

/* const toueTest = new Tour({
    name: "故宫一日游",
    ratng: 4.4,
    price: 999,
  });
  //保存数据
  toueTest
    .save()
    .then((data) => {
      console.log("data is saving:", data);
    })
    .catch((err) => {
      console.log("some error here:", err);
    }); */

module.exports = Tour;
