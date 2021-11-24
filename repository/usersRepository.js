const User = require('../model/user_schema');
// search user in DB by ID
const findById = async id => {
  return await User.findById(id);
};
// search user in DB by email
const findByEmail = async email => {
  return await User.findOne({ email });
};
// create user in DB
const create = async options => {
  const user = new User(options);
  return await user.save();
};
// add updateToken for user
const updateToken = async (id, token) => {
  return await User.updateOne({ _id: id }, { token });
};

module.exports = {
  findById,
  findByEmail,
  create,
  updateToken,
};
