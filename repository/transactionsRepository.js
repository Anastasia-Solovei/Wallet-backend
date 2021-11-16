const Transactions = require('../model/transaction_schema');

const getAllTransactions = async (userId) => {
    return await Transactions.find({owner: userId})
}

const addTransaction = async (body) => {
    return await Transactions.create(body);
}

module.exports = {
    getAllTransactions,
    addTransaction,
}