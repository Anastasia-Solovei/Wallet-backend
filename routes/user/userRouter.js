const express = require('express');
const userRouter = express.Router();
const {
  validateUserRegistration,
  validateUserLogin,
  validateEmail,
} = require('./validationUsers');
const {
  signup,
  login,
  logout,
  current,
  verifyUser,
  resendVerificationEmail,
} = require('../../controllers/usersControllers');
// Add guard for user
const guard = require('../../helpers/guard');

// Change name of home page
userRouter.get('/', guard, function (req, res) {
  res.send('User home page');
});

// add registration route
userRouter.post('/signup', validateUserRegistration, signup);
// add login route
userRouter.post('/login', validateUserLogin, login);
// add logout route
userRouter.post('/logout', guard, logout);
// add route of current user
userRouter.get('/current', guard, current);
// add route of verification email
//userRouter.get('/verify/:emailVerificationToken', verifyUser);
// add route of resending verification email
//userRouter.post('/verify', validateEmail, resendVerificationEmail);

module.exports = userRouter;
