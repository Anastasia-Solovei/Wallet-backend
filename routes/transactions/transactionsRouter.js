const express = require('express');
const transactionsRouter = express.Router();
const guard = require('../../helpers/guard');

const {
  getAllTransactions,
  addTransaction,
  getStatistics,
} = require('../../controllers/transactionsControllers');

transactionsRouter.get('/all', guard, getAllTransactions);
transactionsRouter.post('/new', guard, addTransaction);
transactionsRouter.get('/statistics/', guard, getStatistics);

module.exports = transactionsRouter;
