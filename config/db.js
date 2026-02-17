import mongoose from 'mongoose';
import { DB_URI } from './env.js';

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`MongoDB Connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

export default connectDB;