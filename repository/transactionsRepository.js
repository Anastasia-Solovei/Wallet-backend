const Transactions = require('../model/transaction_schema');

const getAllTransactions = async userId => {
  return await Transactions.find({ owner: userId });
};

const addTransaction = async body => {
  return await Transactions.create(body);
};

//not work
const getStatistics = body => {
  return;
};

module.exports = {
  getAllTransactions,
  addTransaction,
  getStatistics,
};
