const router = require("express").Router();
const {
  getUser,
  getUsers,
  createUser,
  updateUser,
  delUser,
} = require("../controller/userController");
const {
  singup,
  update,
  login,
  forgetPassword,
  resetPassword,
  updatePassword,
  isLogin,
} = require("../controller/authController");
// router.param("id", checkUserId);

//用户注册
router.post("/singUp", singup);

router.route("/update/:id").patch(update);

//更改密码
router.patch("/updatePassword", isLogin, updatePassword);

//用户登录
router.post("/login", login);

//用户数据更新
router.patch("/updateUser", isLogin, updateUser);

//删除用户数据
router.delete("/delUser", isLogin, delUser);

router.route("/").get(getUsers).post(createUser);

router.route("/:id").get(getUser);

//忘记密码
router.post("/forgetPassword", forgetPassword);

//重设密码
router.patch("/resetPassword/:token", resetPassword);

module.exports = router;
