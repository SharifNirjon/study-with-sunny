import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
      type: String,
      unique: true,
      lowercase: true
  },
  description: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    enum: ['O-Level', 'IGCSE', 'AS-Level', 'A2-Level'],
    required: true,
  },
  subject: {
      type: String,
      required: true 
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  currency: {
      type: String,
      default: 'BDT'
  },
  startDate: Date,
  endDate: Date,
  status: {
      type: String,
      enum: ['active', 'upcoming', 'archived'],
      default: 'active'
  },
  features: [String],
  thumbnailUrl: String,
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

export default Course;