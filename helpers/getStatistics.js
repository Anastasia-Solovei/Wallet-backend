const {
  expensesСategories,
  initialSumCategories,
} = require('../config/constants');

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
  };
  expensesСategories.forEach(categoryExp => {
    arrayTransactions.forEach(item => {
      if (item.category === categoryExp) {
        sumCategories[categoryExp] += item.amount;
      }
    });
  });
  return sumCategories;
};

module.exports = { getStatisticsByCategories };
