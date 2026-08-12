import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

// Serve static files from frontend/dist
const distPath = join(__dirname, 'frontend', 'dist');

// Middleware to serve static files
app.use((req, res, next) => {
  // Skip non-file requests (let them fall through to routes)
  if (req.path.includes('.')) {
    const filePath = join(distPath, req.path);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      return res.sendFile(filePath);
    }
  }
  next();
});

// API routes - proxy to backend (if needed for dev)
app.get('/api/*', (req, res) => {
  res.status(404).json({ error: 'API not found on frontend server. Configure VITE_API_URL to point to backend.' });
});

// Serve index.html for SPA routing (catch-all)
app.get('*', (req, res) => {
  const indexPath = join(distPath, 'index.html');
  
  if (fs.existsSync(indexPath)) {
    return res.sendFile(indexPath);
  }
  
  // Fallback if dist doesn't exist
  res.status(200).send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>HomeMate</title>
      <style>
        body { font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background: #f0f0f0; }
        .container { text-align: center; background: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        h1 { color: #10b981; margin-bottom: 10px; }
        p { color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🏠 HomeMate</h1>
        <p>Application is starting...</p>
        <p style="font-size: 12px; color: #999;">Refresh page in a few moments if you see this message</p>
      </div>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 HomeMate server running on port ${PORT}`);
  console.log(`📁 Serving from: ${distPath}`);
  console.log(`✅ Ready to serve frontend and API requests`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Frontend server running on port ${PORT}`);
  console.log(`Serving from: ${distPath}`);
});
