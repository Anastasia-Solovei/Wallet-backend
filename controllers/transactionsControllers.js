const Transactions = require('../repository/transactionsRepository');
const { HttpCode } = require('../config/constants');
const { CustomError } = require('../helpers/custom_error');

// get all transactions of user
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

// add new transaction of user
const addTransaction = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const transaction = await Transactions.addTransaction({
      ...req.body,
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

// get transaction statistics of user by month
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

// update transaction by ID of user
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

// delete transaction by ID of user
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
