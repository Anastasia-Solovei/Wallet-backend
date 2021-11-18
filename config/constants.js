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
  'Main',
  'Food',
  'Car',
  'Me',
  'Children',
  'House',
  'Education',
  'Leisure',
  'Other',
];

module.exports = { HttpCode, expensesСategories, Category };
