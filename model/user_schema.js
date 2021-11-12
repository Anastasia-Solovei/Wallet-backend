const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate(value) {
      const re = /\S+@\S+.\S+/;
      return re.test(String(value).toLowerCase());
    },
  },
});

const User = model("user", userSchema);

module.exports = User;
