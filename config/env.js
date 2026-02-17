import { config } from 'dotenv';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config({
  path: path.join(__dirname, `../../.env.${process.env.NODE_ENV || 'development'}.local`)
});

// Export AFTER dotenv config is loaded with fallback values
export const PORT = process.env.PORT || 5000;
export const NODE_ENV = process.env.NODE_ENV || 'development';
export const DB_URI = process.env.DB_URI;