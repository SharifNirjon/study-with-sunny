import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
    enum: ['Stationery', 'Books', 'Merchandise', 'Other'], 
    default: 'Stationery'
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  imageUrl: {
    type: String,
    // required: true
  },
  isAvailable: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;