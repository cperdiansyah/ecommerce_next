const mongoose = require('mongoose');

const image = new mongoose.Schema({
  image: {
    type: String,
    required: false,
  },
  isUrl: {
    type: Boolean,
    default: false,
  },
});

const productsSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    images: {
      type: [image],
      default: undefined,
    },
    brand: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Category',
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Product || mongoose.model('Product', productsSchema);
