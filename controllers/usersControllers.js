const jwt = require('jsonwebtoken');
const Users = require('../repository/usersRepository');
const { HttpCode } = require('../config/constants');
require('dotenv').config();
const SECRET_KEY = process.env.JWT_SECRET_KEY;
const { CustomError } = require('../helpers/custom_error');

// add registration controller
const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await Users.findByEmail(email);
  if (user) {
    return res.status(HttpCode.CONFLICT).json({
      status: 'error',
      code: HttpCode.CONFLICT,
      message: 'Email is already in use',
    });
  }

  try {
    const newUser = await Users.create({ name, email, password });
    return res.status(HttpCode.CREATED).json({
      status: 'success',
      code: HttpCode.CREATED,
      data: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (e) {
    next(e);
  }
};

// add login controller
const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await Users.findByEmail(email);
  const isValidPassword = await user.isValidPassword(password);
  if (!user || !isValidPassword) {
    return res.status(HttpCode.UNAUTHORIZED).json({
      status: 'error',
      code: HttpCode.UNAUTHORIZED,
      message: 'Invalid credentials',
    });
  }

  const id = user._id;
  const payload = { id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
  await Users.updateToken(id, token);

  return res.status(HttpCode.OK).json({
    status: 'success',
    code: HttpCode.OK,
    data: {
      token,
    },
  });
};

// add logout controller
const logout = async (req, res, next) => {
  const id = req.user.id;
  await Users.updateToken(id, null);
  return res.status(HttpCode.NO_CONTENT).json({ test: 'test' });
};

// add controller of current user
const current = async (req, res, next) => {
  const id = req.user._id;
  const user = await Users.findById(id);

  if (!user) {
    return res.status(HttpCode.UNAUTHORIZED).json({
      status: 'error',
      code: HttpCode.UNAUTHORIZED,
      message: 'Invalid creadentials',
    });
  }

  return res.status(HttpCode.OK).json({
    status: 'success',
    code: HttpCode.OK,
    data: {
      user: {
        name: user.name,
        email: user.email,
      },
    },
  });
};

module.exports = {
  signup,
  login,
  logout,
  current,
};
