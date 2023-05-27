const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/**
 * @desc User Login System
 * @route POST /login
 * @access PRIVATE
 */
const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // validate
  if (!email || !password) return res.status(400).json({ message: 'All Fields Are Required!' });

  // Check user
  const loginUser = await User.findOne({ email });

  if (!loginUser) {
    return res.status(400).json({ message: `Email doesn't exist!` });
  }

  // password match
  const checkPassword = await bcrypt.compare(password, loginUser.password);

  if (!checkPassword) return res.status(400).json({ message: `Password Not Match!` });

  // access token
  const accessToken = jwt.sign({ email: loginUser.email }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
  });

  // refresh token
  // const refreshToken = jwt.sign({ email: loginUser.email }, process.env.REFRESH_TOKEN_SECRET, {
  //   expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
  // });

  res
    .status(200)
    .cookie('aToken', accessToken, {
      httpOnly: false,
      sameSite: 'lax',
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    })
    .json({
      token: accessToken,
      user: loginUser,
    });
});

/**
 * @desc User Register System
 * @route POST /register
 * @access PRIVATE
 */
const userRegister = asyncHandler(async (req, res) => {
  const { name, email, password, username } = req.body;

  // validate
  if (!name || !email || !password || !username) return res.status(400).json({ message: 'All Fields Are Required!' });

  // Email Exist Check
  const emailCheck = await User.findOne({ email });

  if (emailCheck) return res.status(400).json({ message: 'Email Already Exist!' });

  // hash password
  const hash = await bcrypt.hash(password, 10);

  // create new user data
  const user = await User.create({ name, email, username, password: hash });

  // check
  if (user) {
    return res.status(201).json({ message: 'User created successful', user });
  } else {
    return res.status(400).json({ message: 'User Not Created!' });
  }
});

/**
 * @desc Refresh Token Request
 * @route GET /refresh
 * @access PRIVATE
 */
const refreshToken = (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.rToken) return res.status(401).json({ message: 'Unauthorized' });

  const token = cookies.rToken;

  jwt.verify(
    token,
    process.env.REFRESH_TOKEN_SECRET,
    asyncHandler(async (error, decode) => {
      if (error) return res.status(400).json({ message: 'Invalid Refresh Token!' });

      const tokenUser = await User.findOne({ email: decode.email });

      if (!tokenUser) return res.status(404).json({ message: 'Token user not found!' });

      // access token
      const accessToken = jwt.sign({ email: tokenUser.email }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
      });

      res.status(200).json({ token: accessToken });
    })
  );
};

/**
 * @desc Login User Data
 * @route GET /me
 * @access PRIVATE
 */
const me = (req, res) => {
  if (!req.me) return res.status(404).json({ message: 'User not found!' });

  res.status(200).json(req.me);
};

/**
 * @desc User Logout
 * @route POST /logout
 * @access PRIVATE
 */
const userLogout = (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.aToken) return res.status(404).json({ message: 'Token not found!' });

  res.clearCookie('aToken', {
    httpOnly: true,
    secure: process.env.APP_ENV == 'Development' ? false : true,
    sameSite: 'lax',
  });
  res.json({ message: 'Logout Success' });
};

module.exports = { userLogin, refreshToken, userLogout, me, userRegister };
