const express = require('express');
const authRouter = express.Router();

authRouter.get('/', function(req, res) {
  res.send('Birds home page');
});

module.exports = authRouter;