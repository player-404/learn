const router = require("express").Router();
const {
  getTour,
  getTours,
  createTour,
  updateTour,
  delTour,
  topCheap5,
  tourStats,
  tourTime,
} = require("../controller/tourController");
const { isLogin, rolesabundant } = require("../controller/authController");

//查询评分最高且便宜的五条数据Api
router.route("/cheap-top-5").get(topCheap5, getTours);
router.route("/tour-stats").get(tourStats);
router.route("/tour-time/:year").get(tourTime);
router.route("/").get(isLogin, getTours).post(createTour);
router
  .route("/:id")
  .get(getTour)
  .patch(updateTour)
  .delete(isLogin, rolesabundant("admin"), delTour);

module.exports = router;
