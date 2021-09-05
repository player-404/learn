const express = require('express');
const {
  getAllTours,
  addTour,
  getTour,
  updateTour,
  delTour,
} = require('../controller/tourController');

const router = express.Router();

//tours APi
router.route('/').get(getAllTours).post(addTour);
router.route('/:id').get(getTour).patch(updateTour).delete(delTour);

module.exports = router;
