const { Schema, model, SchemaTypes } = require("mongoose");

const categoriesSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: "#FED057",
    },
    owner: {
        type: SchemaTypes.ObjectId,
        ref: "user",
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
    }
  });

const Categories = model("categories", categoriesSchema);

module.exports = Categories;