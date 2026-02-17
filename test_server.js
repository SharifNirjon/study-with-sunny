// Temporary test script to verify server logic without relying on 'npm start' which is hanging or silent
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 5501; // Use a different port to avoid conflicts

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the root directory (one level up from backend)
app.use(express.static(path.join(__dirname, '../')));

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.get('/api/users', (req, res) => {
    res.json([{ name: 'Test User', email: 'test@example.com', role: 'admin' }]);
});

app.listen(PORT, () => {
    console.log(`Test server running on port ${PORT}`);
});
