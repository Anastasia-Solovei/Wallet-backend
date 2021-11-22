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

// const addTransaction = async (body) => {
//   const { type } = body;
//   const amount = +body.amount;
//     const incomes = await Transaction.find({type: 'incomes'});
//     const expenses = await Transaction.find({type: 'expenses'});

//     if (type === 'incomes' && incomes.length > 0) {
//       const { balance } = incomes[incomes.length - 1];
//       body.balance = balance + amount;
//       incomes[incomes.length - 1].balance = balance + amount;

//       console.log({balance});
//       console.log('body', body);
//       console.log(body.balance);
//     } else if (type === 'expenses' && expenses.length > 0) {
//       const { balance } = expenses[expenses.length - 1];
//       body.balance = balance + amount;
//       expenses[expenses.length - 1].balance = balance + amount;
//     } else {
//       body.balance = amount;
//     }

//   return await Transaction.create(body);
// };

const addTransaction = async ({type, amount, owner, totalBalance}) => {

    const typeTransaction = await Transaction.find({type: type, owner: owner});
    // const expenses = await Transaction.find({type});

    // console.log('typeTransaction', typeTransaction);
    // console.log('typeTransactionLength', typeTransaction.length);

    if (typeTransaction.type === 'incomes' && typeTransaction.length > 0) {
      const { balance } = typeTransaction[typeTransaction.length - 1];
      totalBalance = balance + amount;

      console.log(totalBalance)


    //   typeTransaction[typeTransaction.length - 1].balance = balance + amount;

      // console.log({balance});
      // console.log('body', body);
      // console.log(body.balance);
    } 
    // else if (typeTransaction === 'expenses' && expenses.length > 0) {
    //   const { balance } = expenses[expenses.length - 1];
    //   body.balance = balance + amount;
    //   expenses[expenses.length - 1].balance = balance + amount;
    // } else {
    //   body.balance = amount;
    // }

  // return await Transaction.create(body);
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
