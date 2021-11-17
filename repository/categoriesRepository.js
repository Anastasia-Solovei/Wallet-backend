const Category = require('../model/category_schema');
const { expensesСategories } = require('../assets/constants');

const getAllCategories = async () => {
  const data = expensesСategories;
  return data;
};

module.exports = {
  getAllCategories,
};
