const express = require('express');
const transactionsRouter = express.Router();
const guard = require('../../helpers/guard');

const { addTransaction } = require('../../controllers/transactionsControllers');

transactionsRouter.post('/new', guard, addTransaction);

module.exports = transactionsRouter;
