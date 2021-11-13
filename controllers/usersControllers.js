const Users = require('../repository/usersRepository');
const { HttpCode } = require('../config/constants');
require('dotenv').config();
const { CustomError } = require('../helpers/custom_error');

// add registration controller
const signup = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await Users.findByEmail(email);
  if (user) {
    return res.status(HttpCode.CONFLICT).json({
      status: 'error',
      code: HttpCode.CONFLICT,
      message: 'Email is exist',
    });
  }

  try {
    const newUser = await Users.create({ email, password });
    return res.status(HttpCode.CREATED).json({
      status: 'success',
      code: HttpCode.CREATED,
      data: {
        id: newUser.id,
        email: newUser.email,
      },
    });
  } catch (e) {
    next(e);
  }
  res.json();
};

module.exports = {
  signup,
};
