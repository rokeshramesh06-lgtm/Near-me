# 🚀 Quick Vercel Deployment Guide

## What is Vercel?
Vercel is a platform to deploy web applications instantly. Perfect for React and Node.js apps.

---

## 📋 Quick Checklist

- [ ] Push code to GitHub
- [ ] Create MongoDB Atlas free database
- [ ] Create Vercel account
- [ ] Deploy backend
- [ ] Deploy frontend
- [ ] Set environment variables
- [ ] Test deployment

---

## ⚡ 5-Minute Deployment

### Step 1: Push to GitHub (2 min)
```bash
cd "c:\Users\rokes\OneDrive\Desktop\Near by\HomeMate"
git remote add origin https://github.com/YOUR-USERNAME/homemate.git
git branch -M main
git push -u origin main
```

### Step 2: Create MongoDB Database (2 min)
1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up → Create free database
3. Copy connection string
4. Save it (you'll need it next)

### Step 3: Deploy Backend (1 min)
```bash
cd backend
vercel

# Follow prompts:
# Project name: homemate-backend
# Framework: Other
```

After deployment, add environment variables in Vercel Dashboard:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=change_this_to_random_string
FRONTEND_URL=https://homemate-frontend.vercel.app
NODE_ENV=production
```

### Step 4: Deploy Frontend (1 min)
```bash
cd frontend
vercel

# Follow prompts:
# Project name: homemate-frontend
# Framework: Vite
```

After deployment, add environment variable:
```
VITE_API_URL=https://homemate-backend.vercel.app/api
```

### Step 5: Done! ✅
- Frontend: `https://homemate-frontend.vercel.app`
- Backend: `https://homemate-backend.vercel.app/api`

---

## 🔄 Update Code After Deployment

```bash
git add .
git commit -m "Your message"
git push origin main
# Automatic deployment starts!
```

---

## 🆘 Quick Fixes

| Issue | Fix |
|-------|-----|
| MongoDB connection error | Check connection string & IP whitelist |
| CORS error | Update FRONTEND_URL in backend env vars |
| Build fails | Check build logs in Vercel dashboard |
| 404 on frontend | Ensure Vite output is `dist` |

---

For detailed guide, see [DEPLOYMENT_VERCEL.md](DEPLOYMENT_VERCEL.md)
