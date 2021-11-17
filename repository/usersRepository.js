const User = require('../model/user_schema');
// add non duplicate user id
const findById = async id => {
  return await User.findById(id);
};
// add non duplicate user email
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
// add updateEmailVerificationToken for user
const updateEmailVerificationToken = async (
  id,
  isVerified,
  emailVerificationToken,
) => {
  return await User.updateOne(
    { _id: id },
    { isVerified, emailVerificationToken },
  );
};

module.exports = {
  findById,
  findByEmail,
  create,
  updateToken,
  updateEmailVerificationToken,
};
