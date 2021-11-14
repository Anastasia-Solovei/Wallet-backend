const { Schema, model, SchemaTypes } = require('mongoose');

const transactionsSchema = new Schema(
  {
    type: {
      type: String,
    },
    category: {
      type: String,
    },
    amount: {
      type: Number,
    },
    date: {
      type: Number,
    },
    comment: {
      type: String,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: 'user',
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

const transactions = model("transactions", transactionsSchema);

module.exports = transactions;