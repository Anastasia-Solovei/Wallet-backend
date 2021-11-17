const Category = require('../model/category_schema');
const { expensesСategories } = require('../config/constants');

const getAllCategories = async () => {
  const data = expensesСategories;
  return data;
};

module.exports = {
  getAllCategories,
};
