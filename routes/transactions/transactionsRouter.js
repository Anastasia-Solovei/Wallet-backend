const express = require('express');
const transactionsRouter = express.Router();
const guard = require('../../helpers/guard');
const wrapError = require('../../helpers/error_handler');
const { getAllTransactions, addTransaction, editTransactionById, deleteTransactionById, getStatistics } = require('../../controllers/transactionsControllers');

transactionsRouter.get('/all', guard, getAllTransactions);
transactionsRouter.post('/new', guard, addTransaction);
transactionsRouter.get('/statistics/', guard, getStatistics);
transactionsRouter.patch('/:transactionId', guard, wrapError(editTransactionById));
transactionsRouter.delete('/:transactionId', guard,  wrapError(deleteTransactionById));

module.exports = transactionsRouter;
