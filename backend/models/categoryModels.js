const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.Category || mongoose.model('Category', categoriesSchema);
