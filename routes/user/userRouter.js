const express = require('express');
const userRouter = express.Router();
const { signup, login, logout } = require('../../controllers/usersControllers');
// Add guard for user
const guard = require('../../helpers/guard');

// Change name of home page
userRouter.get('/', guard, function (req, res) {
  res.send('User home page');
});

// add registration route
userRouter.post('/signup', signup);
// add login route
userRouter.post('/login', login);
// add logout route
userRouter.post('/logout', guard, logout);

module.exports = userRouter;
