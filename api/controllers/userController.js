const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');

const getAllUser = asyncHandler(async (req, res) => {
  const users = await User.find().select('-password').lean();

  if (!users?.length) {
    return res.status(400).json({ message: 'Not user found' });
  }

  res.json(users);
});

/**
 * @desc get Single users data
 * @route GET /users/:id
 * @access PUBLIC
 */
const getSingleUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id).select('-password').lean();

  if (!user) {
    return res.status(400).json({ message: 'No user found' });
  }

  res.json(user);
});

/**
 * @desc create new user
 * @route POST /users
 * @access PUBLIC
 */
const createUser = asyncHandler(async (req, res) => {
  // get data
  const { name, email, password, role } = req.body;

  // check validation
  if (!name || !password || !email) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // email existOnce
  const emailCheck = await User.findOne({ email });

  if (emailCheck) {
    return res.status(400).json({ message: 'Email already exists' });
  }

  // hash password
  const hash = await bcrypt.hash(password, 10);

  // create new user data
  const user = await User.create({ name, email, role, password: hash });

  // check
  if (user) {
    return res.status(201).json(user);
  }
});

/**
 * @desc delete user data
 * @route DELETE /users/:id
 * @access PUBLIC
 */
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await User.findByIdAndDelete(id);

  if (!user) {
    return res.status(400).json({ message: 'User delete failed' });
  }

  res.json(user);
});

/**
 * @desc update user data
 * @route PATCH /users/:id
 * @access PUBLIC
 */
const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // validation
  if (!req.body) return res.status(400).json({ message: 'Not change data' });

  // user data find
  const user = await User.findById(id).exec();

  // validation
  if (!user) return res.status(400).json({ message: 'User not found' });

  // set Data
  user.name = req.body?.name ? req.body?.name : user.name;
  user.email = req.body?.email ? req.body?.email : user.email;
  user.password = req.body?.password ? await bcrypt.hash(req.body?.password, 10) : user.password;
  user.role = req.body?.role ? req.body?.role : user.role;

  const updateUserData = await user.save();

  // Send Data to Client
  res.json(updateUserData);
});

// export methods
module.exports = {
  getAllUser,
  createUser,
  getSingleUser,
  deleteUser,
  updateUser,
};
