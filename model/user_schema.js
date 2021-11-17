const { Schema, model, SchemaTypes } = require('mongoose');
// Add bcrypt package
const bcrypt = require('bcryptjs');
const SALT_FACTOR = 6;
const crypto = require('crypto');

// Add name , balance field
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for user'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      validate(value) {
        const re = /\S+@\S+.\S+/;
        return re.test(String(value).toLowerCase());
      },
    },
    balance: {
      type: SchemaTypes.Number,
      default: 0,
    },
    token: {
      type: String,
      default: null,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    emailVerificationToken: {
      type: String,
      required: true,
      default: crypto.randomUUID(),
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret._id;
        return ret;
      },
    },
    toObject: { virtuals: true },
  },
);

// Add pre-hook
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(SALT_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Add isValidPassword method
userSchema.methods.isValidPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('user', userSchema);

module.exports = User;
