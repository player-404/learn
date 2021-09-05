const express = require('express');
const {
  getAllTours,
  addTour,
  getTour,
  updateTour,
  delTour,
  checkId,
  checkBody,
} = require('../controller/tourController');

const router = express.Router();

//每次传入id时，都会执行该中间件
router.param('id', checkId);

//tours APi
router.route('/').get(getAllTours).post(checkBody, addTour);
router.route('/:id').get(getTour).patch(updateTour).delete(delTour);

module.exports = router;
