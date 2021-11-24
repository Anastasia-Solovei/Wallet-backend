const express = require('express');
const categoriesRouter = express.Router();
const guard = require('../../helpers/guard');
const { getAllCategories } = require('../../controllers/categoriesControllers');

// get all categories
categoriesRouter.get('/all', guard, getAllCategories);

module.exports = categoriesRouter;
