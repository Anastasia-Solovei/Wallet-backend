const express = require('express');
const userRouter = express.Router();

userRouter.get('/', function(req, res) {
  res.send('Birds home page');
});

module.exports = userRouter;