const { Schema, model } = require("mongoose");

//密码加密模块
const bcrypt = require("bcryptjs");

// user schema
const userSchema = new Schema({
  name: {
    type: "string",
    required: [true, "请输入用户名"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "请输入密码"],
    minLength: [8, "密码长度不能小于8"],
    //查询时， 忽略该值
    select: false,
  },
  passwordConfirm: {
    type: String,
    //验证两次密码是否一致
    validate: {
      validator: function (v) {
        return v === this.password;
      },
      message: "两次密码不一致",
    },
  },
  photo: String,
  email: {
    type: String,
    require: [true, "请输入邮箱"],
    unique: true,
    //转换成小写
    // lowercase: true,1
    validate: {
      //自定义验证器： 验证邮箱的格式是否正确
      validator: function (v) {
        const email =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return email.test(v);
      },
      message: "email格式错误",
    },
  },
  changePasswordTime: Date,
  // 用户角色
  roles: {
    type: "string",
    enum: {
      values: ["user", "admin", "guide"],
      message: "用户角色设置错误",
    },
    default: "user",
  },
});

//schema method 方法 在schema 原型上创建方法
userSchema.method("checkPassword", async (userPassword, DB_PASSWORD) => {
  return await bcrypt.compare(userPassword, DB_PASSWORD);
});

// 判断 token生成之后 更改过了密码 如果更改了 则需要重新登录 生成新的 token
userSchema.method("checkPassowrdChange", function (tokenTime) {
  const changePassTime = this.changePAsTime;
  if (changePassTime) {
    const changeTime = parseInt(this.changePassTime.getTime() / 1000, 10);
    return changeTime > tokenTime;
  }
  return false;
});

/* 
  mongoose 使用中间件时：
    普通函数需要next函数才会继续调用下一个中间件
    使用 async/await 或者 then 方法 会自动调用下一个中间件而不必手动调用next
    next 调用不会阻止之后的代码执行
*/
userSchema.pre("save", async function (next) {
  //isModified 检测文档/文档属性是否修改，修改返回true, 没修改返回false
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  //验证密码设置为undefined，不存储在数据库中，只是用来验证两次密码是否一致
  this.passwordConfirm = undefined;
  next();
});

const User = model("User", userSchema);

module.exports = User;
