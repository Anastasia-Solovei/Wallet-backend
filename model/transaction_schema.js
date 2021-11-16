const { Schema, model, SchemaTypes } = require('mongoose');

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

const Transaction = model("transaction", transactionSchema);

module.exports = Transaction;