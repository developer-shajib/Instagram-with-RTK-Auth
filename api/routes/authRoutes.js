const express = require('express');
const { userLogin, refreshToken, userLogout, me, userRegister } = require('../controllers/authController.js');
const tokenVerify = require('../middlewares/tokenVerify.js');

const router = express.Router();

// routing
router.route('/login').post(userLogin);
router.route('/register').post(userRegister);
router.route('/refresh').get(refreshToken);
router.route('/logout').post(userLogout);
router.route('/me').get(tokenVerify, me);

// export
module.exports = router;
