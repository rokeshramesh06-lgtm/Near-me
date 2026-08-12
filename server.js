import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

// Serve static files from frontend/dist
const distPath = join(__dirname, 'frontend', 'dist');

// Check if dist exists
if (!fs.existsSync(distPath)) {
  console.error('Frontend dist folder not found. Please run: npm run build in frontend folder');
  process.exit(1);
}

// Serve static assets
app.use(express.static(distPath));

// API routes - proxy to backend (if needed for dev)
app.get('/api/*', (req, res) => {
  res.status(404).json({ error: 'API not found on frontend server. Use backend server for API calls.' });
});

// SPA fallback - serve index.html for all non-API routes
app.get('*', (req, res) => {
  const indexPath = join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).json({ error: 'Frontend build not found. Run npm run build' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Frontend server running on port ${PORT}`);
  console.log(`Serving from: ${distPath}`);
});
