import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  ingredients: [
    {
      name: String,
      quantity: Number,
      unit: String,
    },
  ],
  instructions: [String],
  cookingTime: Number,
  servings: Number,
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'easy',
  },
  image: String,
  tags: [String],
  rating: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      userId: mongoose.Schema.Types.ObjectId,
      rating: Number,
      comment: String,
      createdAt: Date,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Recipe', recipeSchema);
