const { Schema, model, SchemaTypes, Mongoose } = require("mongoose");

const CategoriesSchema = new Schema({
    name: {
        type: String,
    },
    color: {
        type: String,
    },
    owner: SchemaTypes.ObjectId,
    ref: "user",
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
  }
);

const categories = mongoose.model("categories", CategoriesSchema);

module.exports = categories;