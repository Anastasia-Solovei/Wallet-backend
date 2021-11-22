const Transactions = require('../repository/transactionsRepository');
const { HttpCode } = require('../config/constants');
const { CustomError } = require('../helpers/custom_error');

const getAllTransactions = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const transaction = await Transactions.getAllTransactions(userId);
    return res.status(HttpCode.CREATED).json({
      status: 'success',
      code: HttpCode.CREATED,
      data: { total: transaction.length, transaction },
    });
  } catch (error) {
    next(error);
  }
};

const addTransaction = async (req, res, next) => {
  try {
    const { type } = req.body;
    const amount = +req.body.amount;
    const balance = +req.body.balance;
    // console.log('type', type);
    // console.log('amount', amount);

    const userId = req.user._id;
    const transaction = await Transactions.addTransaction({
      type,
      amount,
      balance,
      owner: userId,
    });
    return res.status(HttpCode.CREATED).json({
      status: 'success',
      code: HttpCode.CREATED,
      data: { transaction },
    });
  } catch (error) {
    next(error);
  }
};

const getStatisticsByMonth = async (req, res, next) => {
  try {
    const { month, year } = req.query;
    const userId = req.user._id;
    const statistics = await Transactions.getStatistics(userId, month, year);
    const stats = Transactions.getStatisticsByCategories(statistics);
    return res.status(HttpCode.CREATED).json({
      status: 'success',
      code: HttpCode.CREATED,
      statistics: stats,
    });
  } catch (error) {
    next(error);
  }
};

const editTransactionById = async (req, res, next) => {
  const userId = req.user._id;
  const transaction = await Transactions.editTransaction(
    req.params.transactionId,
    req.body,
    userId,
  );

  if (transaction) {
    return res
      .status(200)
      .json({ status: 'success', code: 200, data: { transaction } });
  }
  throw new CustomError(404, 'Not Found');
};

const deleteTransactionById = async (req, res) => {
  const userId = req.user._id;
  const transaction = await Transactions.deleteTransaction(
    req.params.transactionId,
    userId,
  );

  if (transaction) {
    return res
      .status(200)
      .json({ status: 'success', code: 200, data: { transaction } });
  }
  throw new CustomError(404, 'Not Found');
};

module.exports = {
  getAllTransactions,
  addTransaction,

  getStatisticsByMonth,

  editTransactionById,
  deleteTransactionById,
};
