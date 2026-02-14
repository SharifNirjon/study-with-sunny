import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 5500;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the root directory (one level up from backend)
app.use(express.static(path.join(__dirname, '../')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// Mock API endpoints for Admin Panel
app.get('/api/users', (req, res) => {
    res.json([
        { _id: '1', name: 'Test User 1', email: 'test1@example.com', role: 'user' },
        { _id: '2', name: 'Admin User', email: 'admin@example.com', role: 'admin' }
    ]);
});

app.get('/api/subscriptions', (req, res) => {
    res.json([
        { 
            user: { name: 'Test User 1' }, 
            course: { title: 'AS Level Chemistry' }, 
            status: 'active', 
            expiryDate: new Date().toISOString() 
        }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
