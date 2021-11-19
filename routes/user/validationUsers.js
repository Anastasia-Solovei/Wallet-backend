const Joi = require('joi');
const { HttpCode } = require('../../config/constants');

const patternPassword = '^[a-zA-Z0-9]{5,20}$';

const schemaUserRegistration = Joi.object({
  name: Joi.string().min(1).max(12).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(6)
    .max(12)
    .pattern(new RegExp(patternPassword))
    .required(),
});

const schemaUserLogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(6)
    .max(12)
    .pattern(new RegExp(patternPassword))
    .required(),
});

const schemaEmail = Joi.object({
  email: Joi.string().email().required(),
});

const validate = async (schema, obj, res, next) => {
  try {
    await schema.validateAsync(obj);
    next();
  } catch (err) {
    res.status(HttpCode.BAD_REQUEST).json({
      status: 'error',
      code: HttpCode.BAD_REQUEST,
      message: `Field ${err.message.replace(/"/g, '')}`,
    });
  }
};

module.exports.validateUserRegistration = async (req, res, next) => {
  return await validate(schemaUserRegistration, req.body, res, next);
};

module.exports.validateUserLogin = async (req, res, next) => {
  return await validate(schemaUserLogin, req.body, res, next);
};

module.exports.validateEmail = async (req, res, next) => {
  return await validate(schemaEmail, req.body, res, next);
};
