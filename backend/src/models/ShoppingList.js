import mongoose from 'mongoose';

const shoppingListSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    default: 'Shopping List',
  },
  items: [
    {
      name: String,
      quantity: Number,
      unit: String,
      category: String,
      completed: {
        type: Boolean,
        default: false,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('ShoppingList', shoppingListSchema);
