const express = require('express');
const transactionsRouter = express.Router();
const guard = require('../../helpers/guard');
const wrapError = require('../../helpers/error_handler');
const {
  getAllTransactions,
  addTransaction,
  editTransactionById,
  deleteTransactionById,
  getStatisticsByMonth,
} = require('../../controllers/transactionsControllers');

// get all transaction list
transactionsRouter.get('/all', guard, getAllTransactions);
// add new transaction
transactionsRouter.post('/new', guard, addTransaction);
// get transaction statistic by month
transactionsRouter.get('/statistics/', guard, getStatisticsByMonth);
// update transaction
transactionsRouter.patch(
  '/:transactionId',
  guard,
  wrapError(editTransactionById),
);
// delete transaction
transactionsRouter.delete(
  '/:transactionId',
  guard,
  wrapError(deleteTransactionById),
);

module.exports = transactionsRouter;
