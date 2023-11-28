const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// @desc Login
// @route POST /auth/login
// @access Public
const login = (req, res) => {};

// @desc Refresh
// @route GET /auth/login
// @access Public - because access token has expired
const refresh = (req, res) => {};

// @desc Logout
// @route POST /auth/login
// @access Public - just to clear cookie if exists
const logout = (req, res) => {};

module.exports = {
  login,
  refresh,
  logout,
};