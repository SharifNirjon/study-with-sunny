import { Router } from 'express';
import { title } from 'node:process';

const authRouter = Router();

export default authRouter;

authRouter.post('/sign-up', (req, res) => {
  // Registration logic here
  res.json({title: 'User registered successfully'});
});

authRouter.post('/sign-in', (req, res) => {
  // Authentication logic here
  res.json({title: 'User signed in successfully'});
});


authRouter.post('/sign-out', (req, res) => {
  // Authentication logic here
  res.json({title: 'User signed out successfully'});
});