const { Schema, model, SchemaTypes } = require('mongoose');
const { Category } = require('../config/constants');

const transactionSchema = new Schema(
  {
    type: {
      type: SchemaTypes.String,
      enum: ['incomes', 'expenses'],
      default: 'incomes',
    },
    amount: {
      type: SchemaTypes.Number,
      min: 0,
      required: true,
    },
    date: {
      type: SchemaTypes.String,
      default: new Date().toLocaleDateString(),
    },
    day: {
      type: String,
    },
    month: {
      type: SchemaTypes.String,
    },
    year: {
      type: String,
    },
    comment: {
      type: SchemaTypes.String,
      default: '',
    },
    balance: {
      type: SchemaTypes.Number,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: 'user',
      required: true,
    },
    userId: {
      type: SchemaTypes.String,
    },
    category: {
      type: SchemaTypes.String,
      enum: [...Category.expenses, ...Category.incomes],
      default: Category.incomes[0],
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

const Transaction = model('transaction', transactionSchema);

module.exports = Transaction;
