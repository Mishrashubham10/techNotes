const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/usersController');

router.route
  .get(getAllUsers)
  .post(createUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;