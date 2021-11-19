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
      console.log(categoryExp);
      if (item.category === categoryExp) {
        console.log('yes');
        sumCategories[categoryExp] += item.amount;
        console.log(item.amount);
      }
    });
  });
  console.log(sumCategories);
  return sumCategories;
};

module.exports = { getStatisticsByCategories };
