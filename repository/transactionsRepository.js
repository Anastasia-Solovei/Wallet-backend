const Transaction = require('../model/transaction_schema');
const { expensesСategories } = require('../config/constants');
const getAllCategories = require('./categoriesRepository');

const getAllTransactions = async userId => {
  return await Transaction.find({ owner: userId });
};

const getStatistics = async (month, year, userId) => {
  console.log(month, year, userId);
  return await Transaction.find({ owner: userId, month: month, year: year });

  // const arrayCategories = getAllCategories();
  // console.log(expensesСategories);
  // const expensesByCategories = await expensesСategories.map(category => {
  //   console.log(category);
  //   Transaction.find({ category, month, year, userId });
  // });
  // console.log(expensesByCategories);
  // return expensesByCategories;
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
};
