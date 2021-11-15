const { Schema, model, SchemaTypes } = require('mongoose');

const transactionsSchema = new Schema(
  {
    type: {
      type: String,
      enum: ['incomes', 'expenses'],
      default: 'incomes',
    },
    category: {
      type: SchemaTypes.ObjectId,
      ref: 'category',
      required: true,
    },
    amount: {
      type: Number,
      min: 0,
      required: true,
    },
    date: {
      type: Number,
      default: new Date().toLocaleDateString(),
    },
    comment: {
      type: String,
      default: '',
    },
    balance: {
      type: Number,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: 'user',
      required: true,
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

const Transactions = model("transactions", transactionsSchema);

module.exports = Transactions;