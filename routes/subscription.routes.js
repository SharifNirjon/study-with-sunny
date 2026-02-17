<<<<<<< HEAD
import {Router } from 'express';

const subscriptionRouter = Router();        

subscriptionRouter.get('/', (req, res) => { res.send('Get all subscriptions'); });

export default subscriptionRouter;
=======
import { Router } from 'express';
import Subscription from '../models/subscription.model.js';

const subscriptionRouter = Router();

// Get all subscriptions
subscriptionRouter.get('/', async (req, res) => {
  try {
    const subscriptions = await Subscription.find().populate('user', 'name email').populate('course', 'title');
    res.json(subscriptions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create subscription
subscriptionRouter.post('/', async (req, res) => {
  try {
    const newSubscription = new Subscription(req.body);
    const savedSubscription = await newSubscription.save();
    res.status(201).json(savedSubscription);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default subscriptionRouter;
>>>>>>> 05ef44c3cf1d20ed658d44ffa20061cd5a9d3a52
