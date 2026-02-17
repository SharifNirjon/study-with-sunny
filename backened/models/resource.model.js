import mongoose from 'mongoose';

const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['note', 'video', 'past_paper', 'quiz', 'link'],
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
  fileUrl: {
      type: String, 
      required: true
  },
  isFree: {
      type: Boolean,
      default: false
  },
  course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course', 
  },
  description: String,
}, { timestamps: true });

const Resource = mongoose.model('Resource', resourceSchema);

export default Resource;