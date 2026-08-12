import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: String,
  role: {
    type: String,
    enum: ['homemaker', 'shop_owner', 'admin'],
    default: 'homemaker',
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
    },
  },
  address: String,
  avatar: String,
  preferences: {
    vegetarian: Boolean,
    priceRange: {
      min: Number,
      max: Number,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.index({ location: '2dsphere' });

export default mongoose.model('User', userSchema);
