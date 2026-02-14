import { Router } from 'express';
import User from '../models/user.model.js';

const authRouter = Router();

authRouter.post('/sign-up', async (req, res) => {
  try {
    const { name, email, password, phone, level, interestedSubjects } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = await User.create({
      name,
      email,
      password, // Note: Password should be hashed in production
      phone,
      level,
      interestedSubjects
    });

    res.status(201).json({ message: 'User registered successfully', user: { id: newUser._id, name: newUser.name, email: newUser.email } });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
});

authRouter.post('/sign-in', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.password !== password) { // Note: Compare hashed password in production
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'User signed in successfully', user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: 'Error signing in', error: error.message });
  }
});

authRouter.post('/sign-out', (req, res) => {
  res.json({ message: 'User signed out successfully' });
});

export default authRouter;