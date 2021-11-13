const express = require('express');
const userRouter = express.Router();
const { signup } = require('../../controllers/usersControllers');

userRouter.get('/', function (req, res) {
  res.send('Birds home page');
});

// add registration route
userRouter.post('/signup', signup);

module.exports = userRouter;
