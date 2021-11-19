const Category = require('../model/category_schema');
const { expensesСategories } = require('../config/constants');

const getAllCategories = () => {
  const data = expensesСategories;
  console.log(data);
  return data;
};

module.exports = {
  getAllCategories,
};
