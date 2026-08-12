# HomeMate Installation & Setup Guide

## 🎯 Quick Start (5 Minutes)

### 1. Backend Setup

```bash
cd HomeMate/backend
npm install
```

Create `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/homemate
JWT_SECRET=your_secret_key_here
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

Start MongoDB:
```bash
mongod
```

Start backend:
```bash
npm run dev
```

Backend runs at: `http://localhost:5000`

### 2. Frontend Setup

```bash
cd HomeMate/frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

## 📋 System Requirements

- **Node.js**: v14 or higher
- **npm**: v6 or higher
- **MongoDB**: v4.4 or higher
- **RAM**: 2GB minimum
- **Disk Space**: 1GB minimum

---

## 🔍 Testing the Application

### Register a New User
1. Go to `http://localhost:5173/login`
2. Click "Register here"
3. Fill in details and register

### Login
1. Use your registered email and password

### Test Features
1. **Nearby Shops**: Click on any category (Vegetables, Grocery, etc.)
2. **Recipes**: Go to Recipes tab
3. **Shopping**: Go to Shopping tab and add items

---

## 🐛 Troubleshooting

### MongoDB Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:27017

Solution:
1. Ensure MongoDB is installed
2. Start MongoDB: mongod
3. Restart backend server
```

### Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::5000

Solution:
1. Change port in .env file
2. Or kill process on that port
```

### CORS Error
```
Error: Cross-Origin Request Blocked

Solution:
1. Check FRONTEND_URL in backend .env
2. Ensure it matches your frontend URL
3. Restart backend
```

---

## 📚 API Testing with Postman/Insomnia

### Auth Endpoints
```
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "9876543210",
  "latitude": 28.6139,
  "longitude": 77.2090
}
```

### Get Nearby Shops
```
GET http://localhost:5000/api/shops/nearby?latitude=28.6139&longitude=77.2090&category=vegetables&distance=5000
```

---

## 🎨 Frontend Structure

- `/` - Home page
- `/nearby` - Nearby shops
- `/recipes` - Recipe suggestions
- `/shopping` - Shopping lists
- `/login` - Authentication

---

## 🔑 Important Files

### Backend
- `backend/src/server.js` - Main server file
- `backend/src/config/database.js` - Database connection
- `backend/.env` - Environment variables

### Frontend
- `frontend/src/App.jsx` - Main app component
- `frontend/src/services/api.js` - API client
- `frontend/src/utils/store.js` - State management

---

## ✅ Checklist Before Deployment

- [ ] MongoDB is running and accessible
- [ ] All dependencies installed (`npm install`)
- [ ] `.env` files configured correctly
- [ ] Backend server starts without errors
- [ ] Frontend builds successfully (`npm run build`)
- [ ] API endpoints tested with Postman/Insomnia
- [ ] Environment variables set on production server

---

## 🚀 Next Steps

1. **Add Sample Data**: Create shops, products, and recipes in MongoDB
2. **Customize UI**: Modify colors and styling in Tailwind config
3. **Add Features**: Implement missing features from the roadmap
4. **Deploy**: Deploy backend to cloud (Heroku, AWS, etc.)
5. **Deploy**: Deploy frontend to CDN (Vercel, Netlify, etc.)

---

For detailed documentation, see [README.md](README.md)
