// const { Schema, model, SchemaTypes } = require('mongoose');

// const categorySchema = new Schema(
//   {
//     name: {
//       type: SchemaTypes.String,
//       enum: [
//         'food',
//         'car',
//         'me',
//         'children',
//         'house',
//         'education',
//         'leisure',
//         'other',
//       ],
//       default: 'other',
//     },
//     color: {
//       type: SchemaTypes.String,
//       default: '#FED057',
//     },
//   },
//   {
//     versionKey: false,
//     timestamps: true,
//     toJSON: {
//       virtuals: true,
//       transform: function (doc, ret) {
//         delete ret._id;
//         return ret;
//       },
//     },
//   },
// );

// const Category = model('category', categorySchema);

// module.exports = Category;
