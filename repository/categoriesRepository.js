const Category = require('../model/category_schema');

const getAllCategories = async () => {
  try {
    const data = await Category.find({});
    return data;
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCategories,
};
