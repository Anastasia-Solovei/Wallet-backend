const { array } = require('joi');

const HttpCode = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
};

const Category = {
  expenses: [
    'main',
    'food',
    'car',
    'me',
    'children',
    'house',
    'education',
    'leisure',
    'other',
  ],
  incomes: ['incomes'],
};

const expensesСategories = [
  'main',
  'food',
  'car',
  'me',
  'children',
  'house',
  'education',
  'leisure',
  'other',
];

let initialSumCategories = {
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

module.exports = {
  HttpCode,
  expensesСategories,
  Category,
  initialSumCategories,
};
