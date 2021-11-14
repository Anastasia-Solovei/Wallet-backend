const express = require('express');
const transactionsRouter = express.Router();

const {
    addTransaction,
} = require('../../controllers/transactionsControllers');

transactionsRouter.post('/new', addTransaction);

module.exports = transactionsRouter;