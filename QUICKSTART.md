# HomeMate - Quick Start Guide

## 🚀 Start Development in 3 Steps

### Step 1: Setup Backend
```bash
cd backend
npm install
npm run dev
```
✅ Backend starts at: http://localhost:5000

### Step 2: Setup Frontend (in a new terminal)
```bash
cd frontend
npm install
npm run dev
```
✅ Frontend starts at: http://localhost:5173

### Step 3: Start MongoDB (if running locally)
```bash
mongod
```

That's it! 🎉

---

## 🧪 Quick Test

1. Open http://localhost:5173
2. Click on any category
3. View nearby shops
4. Check the Console for any errors

---

## 🐛 Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| MongoDB connection error | Run `mongod` in terminal |
| Port 5000 already in use | Change `PORT` in .env |
| CORS error | Check `FRONTEND_URL` in .env |
| API not working | Ensure backend is running |

---

## 📱 Features to Test

- ✅ Home page with categories
- ✅ Nearby shops search
- ✅ Product search
- ✅ Recipe suggestions
- ✅ Shopping list management
- ✅ User authentication

---

For detailed documentation, see [README.md](README.md)
