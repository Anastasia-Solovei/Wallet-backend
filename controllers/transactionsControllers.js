const Transactions = require('../repository/transactionsRepository');
const { HttpCode } = require('../config/constants');
// const {CustomError} = require('../helpers/custom_error');

const getAllTransactions = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const transaction = await Transactions.getAllTransactions({
      ...req.body,
      owner: userId,
    });
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

const getStatistics = async (req, res, next) => {
  try {
    const { month, year } = req.query;
    const userId = req.user._id;

    const statistics = await Transactions.getStatistics({
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

module.exports = {
  getAllTransactions,
  addTransaction,
  getStatistics,
};
