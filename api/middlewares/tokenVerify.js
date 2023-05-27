const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const asyncHandler = require('express-async-handler');

const tokenVerify = (req, res, next) => {
  const authHeader = req.headers.Authorization || req.headers.authorization;

  if (!authHeader) return res.status(401).json({ message: 'Unauthorized' });

  const token = authHeader.split(' ')[1];

  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    asyncHandler(async (error, decode) => {
      if (error) return res.status(400).json({ message: 'Invalid Token!' });

      const me = await User.findOne({ email: decode.email }).select('-password');

      req.me = me;

      next();
    })
  );
};

module.exports = tokenVerify;
