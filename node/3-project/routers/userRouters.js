const express = require('express');

const router = express.Router();
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  delUser,
  checkUserID,
} = require('../controller/userController');

router.param('id', checkUserID);

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(delUser);

module.exports = router;
