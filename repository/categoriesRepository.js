const { Category } = require('../config/constants');

const getAllCategories = () => {
  const data = Category.expenses;
  console.log(data);
  return data;
};

module.exports = {
  getAllCategories,
};
