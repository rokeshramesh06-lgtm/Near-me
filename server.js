import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import path from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

// Serve static files from frontend/dist
const distPath = join(__dirname, 'frontend', 'dist');

// Middleware to serve static files
const serveStatic = (req, res, next) => {
  const filePath = join(distPath, req.path);
  
  // If file exists in dist, serve it
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    return res.sendFile(filePath);
  }
  
  // For SPA routing - serve index.html for all non-file paths
  const indexPath = join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    return res.sendFile(indexPath);
  }
  
  next();
};

// Apply static middleware
app.use(serveStatic);

// API routes - proxy to backend (if needed for dev)
app.get('/api/*', (req, res) => {
  res.status(404).json({ error: 'API not found on frontend server. Configure VITE_API_URL to point to backend.' });
});

// Fallback for any other request
app.get('*', (req, res) => {
  const indexPath = join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('<h1>HomeMate Frontend</h1><p>App is building or not deployed correctly.</p>');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Frontend server running on port ${PORT}`);
  console.log(`Serving from: ${distPath}`);
});
