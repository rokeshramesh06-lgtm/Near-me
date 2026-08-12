import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  shopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shop',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: String,
  price: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    default: 'kg',
  },
  availability: {
    type: Boolean,
    default: true,
  },
  stock: Number,
  image: String,
  description: String,
  discount: Number,
  discountedPrice: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Product', productSchema);
