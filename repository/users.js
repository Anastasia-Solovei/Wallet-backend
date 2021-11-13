const User = require('../model/user_schema');
// add non duplicate user email
const findByEmail = async email => {
  return await User.findOne({ email });
};
// create user in DB
const create = async options => {
  const user = new User(options);
  return await user.save();
};

module.exports = {
  findByEmail,
  create,
};
