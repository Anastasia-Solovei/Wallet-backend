const Transaction = require('../model/transaction_schema');
const { expensesСategories } = require('../config/constants');
const getAllCategories = require('./categoriesRepository');

const getAllTransactions = async userId => {
  return await Transaction.find({ owner: userId });
};

const getStatistics = async (userId, month, year) => {
  return await Transaction.find({ owner: userId, month: month, year: year });
};

const getStatisticsByCategories = arrayTransactions => {
  const sumCategories = {
    main: 0,
    food: 0,
    car: 0,
    me: 0,
    children: 0,
    house: 0,
    education: 0,
    leisure: 0,
    other: 0,
    incomes: 0,
  };
  expensesСategories.forEach(categoryExp => {
    arrayTransactions.forEach(item => {
      if (item.type === 'incomes') {
        sumCategories.incomes += item.amount;
      } else if (item.category === categoryExp) {
        sumCategories[categoryExp] += item.amount;
      }
    });
  });
  return sumCategories;
};

const addTransaction = async body => {
  return await Transaction.create(body);
};

const editTransaction = async (transactionId, body, userId) => {
  return await Transaction.findOneAndUpdate(
    { _id: transactionId, owner: userId },
    { ...body },
    { new: true },
  );
};

const deleteTransaction = async (transactionId, userId) => {
  return await Transaction.findOneAndRemove({
    _id: transactionId,
    owner: userId,
  });
};

module.exports = {
  getStatistics,
  getAllTransactions,
  addTransaction,
  editTransaction,
  deleteTransaction,
  getStatisticsByCategories,
};
