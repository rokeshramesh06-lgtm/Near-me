# 🚀 HomeMate Deployment Guide - Vercel

## Overview
This guide covers deploying HomeMate to Vercel:
- **Frontend**: React + Vite → Vercel
- **Backend**: Node.js + Express → Vercel
- **Database**: MongoDB → MongoDB Atlas

---

## 📋 Prerequisites

1. **GitHub Account** - Push code to GitHub
2. **Vercel Account** - Create at [vercel.com](https://ververcel.com)
3. **MongoDB Atlas Account** - Free tier at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
4. **Vercel CLI** - Already installed

---

## 🗄️ Step 1: Set Up MongoDB Atlas (Database)

### 1.1 Create MongoDB Atlas Account
- Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Sign up for free
- Create a new project

### 1.2 Create Cluster
- Click "Create Deployment"
- Choose "M0 Free" tier
- Select your region
- Click "Create Deployment"

### 1.3 Get Connection String
- Go to "Database" → "Connect"
- Choose "Connect your application"
- Copy the connection string
- Replace `<username>` and `<password>` with your credentials
- Replace `<database>` with `homemate`

Example: `mongodb+srv://user:password@cluster.mongodb.net/homemate?retryWrites=true&w=majority`

### 1.4 Whitelist IP
- Go to "Network Access"
- Click "Add IP Address"
- Select "Allow from anywhere" (0.0.0.0/0)
- Confirm

---

## 🎨 Step 2: Deploy Frontend to Vercel

### 2.1 Push Code to GitHub
```bash
cd "c:\Users\rokes\OneDrive\Desktop\Near by\HomeMate"
git remote add origin https://github.com/YOUR-USERNAME/homemate.git
git branch -M main
git push -u origin main
```

### 2.2 Deploy Frontend
```bash
cd frontend
vercel
```

Follow the prompts:
- Link to existing project? → No
- Set project name: `homemate-frontend`
- Framework preset: `Vite`
- Output directory: `dist`

### 2.3 Add Environment Variables
After deployment:
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click your `homemate-frontend` project
3. Go to Settings → Environment Variables
4. Add:
   ```
   VITE_API_URL=https://homemate-backend.vercel.app/api
   ```
5. Redeploy: `vercel --prod`

**Frontend URL**: `https://homemate-frontend.vercel.app`

---

## 🔙 Step 3: Deploy Backend to Vercel

### 3.1 Deploy Backend
```bash
cd backend
vercel
```

Follow the prompts:
- Link to existing project? → No
- Set project name: `homemate-backend`
- Framework preset: `Other` → Blank
- Root directory: `./`

### 3.2 Add Environment Variables
After deployment:
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click your `homemate-backend` project
3. Go to Settings → Environment Variables
4. Add these variables:
   ```
   MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/homemate?retryWrites=true&w=majority
   JWT_SECRET=your_super_secure_secret_key_here_min_32_chars
   NODE_ENV=production
   FRONTEND_URL=https://homemate-frontend.vercel.app
   PORT=3000
   ```
5. Redeploy: Go to Deployments tab → Click latest → Click "Redeploy"

**Backend URL**: `https://homemate-backend.vercel.app`

---

## ✅ Step 4: Verify Deployment

### Test Backend
```bash
curl https://homemate-backend.vercel.app/api/health
```

Should return: `{"status":"OK","message":"HomeMate API is running"}`

### Test Frontend
1. Open `https://homemate-frontend.vercel.app`
2. Try clicking on a category
3. Check browser console for errors

---

## 🔄 Step 5: Update Frontend API URL

Your frontend is already configured to use the backend URL from environment variables. Just verify it's set correctly in Vercel dashboard.

---

## 🐛 Troubleshooting

### Frontend Deployment Failed
**Problem**: `npm ERR! 404 Not Found`
**Solution**: 
- Ensure `package.json` is in frontend directory
- Check that node_modules is in `.gitignore`

### Backend Connection Error
**Problem**: `Cannot connect to database`
**Solution**:
- Verify MongoDB URI in environment variables
- Check IP whitelist in MongoDB Atlas (should be 0.0.0.0/0)
- Test connection string locally first

### CORS Error
**Problem**: `Cross-Origin Request Blocked`
**Solution**:
- Update `FRONTEND_URL` in backend environment variables
- Ensure it matches your frontend URL exactly
- Redeploy backend

### Environment Variables Not Working
**Problem**: Backend can't read environment variables
**Solution**:
- Go to project Settings → Environment Variables
- Add variables there (NOT in vercel.json)
- Redeploy after adding

---

## 📝 Update Code After Deployment

### To Update Frontend:
```bash
cd frontend
git add .
git commit -m "Update frontend feature"
git push origin main
vercel --prod  # Automatic if connected to GitHub
```

### To Update Backend:
```bash
cd backend
git add .
git commit -m "Update backend API"
git push origin main
vercel --prod  # Automatic if connected to GitHub
```

---

## 🔐 Security Checklist

- [ ] Change `JWT_SECRET` to a strong random string
- [ ] Enable IP whitelist in MongoDB Atlas
- [ ] Use strong MongoDB password
- [ ] Never commit `.env` file to GitHub
- [ ] Keep `.gitignore` updated
- [ ] Review Vercel environment variables
- [ ] Enable HTTPS (automatic on Vercel)

---

## 📊 Monitoring

### Vercel Dashboard
- View deployments: [vercel.com/dashboard](https://vercel.com/dashboard)
- Check logs: Click project → "Functions" tab
- Monitor usage: "Analytics" tab

### MongoDB Atlas
- View database: [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
- Check connection stats
- Monitor storage usage

---

## 🚀 Production URLs

After successful deployment:

| Service | URL |
|---------|-----|
| Frontend | `https://homemate-frontend.vercel.app` |
| Backend API | `https://homemate-backend.vercel.app/api` |
| Database | MongoDB Atlas (cloud) |

---

## 💡 Pro Tips

1. **Auto-deploy**: Connect GitHub → Vercel (automatic on push)
2. **Preview URLs**: Each pull request gets a preview deployment
3. **Rollback**: Click "Deployments" → Select old version → Click "..."
4. **Custom Domain**: Buy domain → Add in Vercel Settings
5. **API Rate Limits**: Vercel free tier has limits, upgrade if needed

---

## 🆘 Getting Help

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **MongoDB Atlas**: [docs.atlas.mongodb.com](https://docs.atlas.mongodb.com)
- **Issue with build**: Check Vercel build logs
- **Database connection**: Test URI in MongoDB Atlas UI

---

## 🎉 You're Deployed!

Your HomeMate application is now live on Vercel!

**Frontend**: https://homemate-frontend.vercel.app  
**Backend API**: https://homemate-backend.vercel.app/api

Share these URLs with others to showcase your project! 🚀
