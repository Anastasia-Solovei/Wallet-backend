const Transactions = require('../model/transaction_schema');


const addTransaction = async (body) => {
    return await Transactions.create(body);
}

module.exports = {
    addTransaction,
}