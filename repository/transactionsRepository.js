const Transaction = require('../model/transaction_schema');

const getAllCategories = require('./categoriesRepository');

//not work

// const getStatistics = async (month, year, userId) => {
//   const expensesByCategories = await getAllCategories.map(category => {
//     Transaction.find({ category, month, year, userId });
//   });
//   return expensesByCategories;
// };

const getStatistics = async (month, year, userId) => {
  const expensesByCategories = await getAllCategories.map(category => {
    Transaction.find({ category, month, year, userId });
  });
  return expensesByCategories;
};

const getAllTransactions = async userId => {
  return await Transaction.find({ owner: userId });
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
