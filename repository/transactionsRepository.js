const Transaction = require('../model/transaction_schema');

//not work
const getStatistics = body => {
  return;
};

const getAllTransactions = async (userId) => {
    return await Transaction.find({owner: userId})
}

const addTransaction = async (body) => {
    return await Transaction.create(body);
}

const editTransaction = async (transactionId, body, userId) => {
    return await Transaction.findOneAndUpdate(
        { _id: transactionId, owner: userId },
        { ...body },
        { new: true }
      );
}

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
}

