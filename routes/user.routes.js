import { Router } from 'express';
export default userrouter;


const userrouter = Router();

userrouter.get('/', (req, res) => {
  // User profile logic here
  res.json({ title: 'Get all users' });
}       
);

userrouter.get('/:id', (req, res) => {
  // User profile logic here
  res.json({ title: 'Get user details' });
});


userrouter.get('/', (req, res) => {
  // User profile logic here
  res.json({ title: 'Create new user' });
});


userrouter.get('/:id', (req, res) => {
  // User profile logic here
  res.json({ title: 'Update user details' });
});


userrouter.delete('/:id', (req, res) => {
  // User profile logic here
  res.json({ title: 'Delete user details' });
});



