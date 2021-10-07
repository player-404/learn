const router = require("express").Router();
const {
  getUser,
  getUsers,
  createUser,
  updateUser,
  delUser,
} = require("../controller/userController");
const { singup, update, login } = require("../controller/authController");
// router.param("id", checkUserId);

//用户注册
router.route("/singUp").post(singup);

router.route("/update/:id").patch(update);

//用户登录
router.route("/login").post(login);

router.route("/").get(getUsers).post(createUser);

router.route("/:id").get(getUser).patch(updateUser).delete(delUser);

module.exports = router;
