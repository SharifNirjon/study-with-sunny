import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { PORT } from './config/env.js';
import connectDB from './config/db.js';

import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import userRouter from './routes/user.routes.js';

const app = express();

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the root directory (one level up from backend)
app.use(express.static(path.join(__dirname, '../')));

app.use('/api/auth', authRouter);
app.use('/api/subscriptions', subscriptionRouter);
app.use('/api/users', userRouter);

// Connect to Database
connectDB();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, () => {
  console.log('Server on port ' + PORT);
});

export default app;