const { Category } = require('../config/constants');

// get all transactions categories
const getAllCategories = () => {
  const data = Category.expenses;
  return data;
};

module.exports = {
  getAllCategories,
};
