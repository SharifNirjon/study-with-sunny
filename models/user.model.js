import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'User name is required'],
    trim: true,
    minLength: 2,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, 'User email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Please fill a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'User password is required'],
    minLength: 6,
  },
  role: {
      type: String,
      enum: ['student', 'admin', 'instructor'],
      default: 'student'
  },
  phone: { 
      type: String, 
      required: false 
  },
  address: {
      street: String,
      city: String,
      country: String,
      zipCode: String
  },
  level: {
      type: String,
      enum: ['O-Level', 'IGCSE', 'AS-Level', 'A2-Level', 'Other'],
  },
  interestedSubjects: [{
      type: String
  }],
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;