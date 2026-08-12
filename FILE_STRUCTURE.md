# 📂 Complete File Structure - HomeMate

## Root Directory
```
HomeMate/
├── .gitignore                  ← Git ignore patterns
├── README.md                   ← Main project documentation
├── SETUP.md                    ← Setup & installation guide
├── API.md                      ← Complete API reference
├── QUICKSTART.md               ← Quick start guide
├── PROJECT_SUMMARY.md          ← Project overview & status
├── setup.sh                    ← Automatic setup (Linux/Mac)
├── setup.bat                   ← Automatic setup (Windows)
│
├── backend/                    ← Node.js + Express API
│   ├── package.json
│   ├── .env.example
│   │
│   └── src/
│       ├── server.js           ← Main server file (Express app)
│       │
│       ├── config/
│       │   ├── database.js     ← MongoDB connection
│       │   └── constants.js    ← App constants & enums
│       │
│       ├── models/             ← Mongoose schemas
│       │   ├── User.js         ← User model with geolocation
│       │   ├── Shop.js         ← Shop/vendor model
│       │   ├── Product.js      ← Product inventory model
│       │   ├── Recipe.js       ← Recipe model
│       │   └── ShoppingList.js ← Shopping list model
│       │
│       ├── controllers/        ← Business logic
│       │   ├── authController.js      ← Auth endpoints
│       │   ├── shopController.js      ← Shop endpoints
│       │   ├── productController.js   ← Product endpoints
│       │   ├── recipeController.js    ← Recipe endpoints
│       │   └── shoppingListController.js ← Shopping endpoints
│       │
│       ├── routes/             ← API endpoints
│       │   ├── authRoutes.js         ← /api/auth/*
│       │   ├── shopRoutes.js         ← /api/shops/*
│       │   ├── productRoutes.js      ← /api/products/*
│       │   ├── recipeRoutes.js       ← /api/recipes/*
│       │   └── shoppingListRoutes.js ← /api/shopping-lists/*
│       │
│       └── middleware/         ← Express middleware
│           ├── auth.js         ← JWT & role-based auth
│           └── errorHandler.js ← Error handling
│
└── frontend/                   ← React + Vite app
    ├── index.html              ← HTML template
    ├── package.json
    ├── vite.config.js          ← Vite configuration
    ├── tailwind.config.js      ← Tailwind CSS config
    ├── postcss.config.js       ← PostCSS config
    │
    └── src/
        ├── main.jsx            ← React entry point
        ├── App.jsx             ← Main app component with routes
        │
        ├── components/         ← Reusable components
        │   ├── Header.jsx      ← Navigation header
        │   ├── Header.css      ← Header styles
        │   ├── Footer.jsx      ← Footer component
        │   ├── ShopCard.jsx    ← Shop display card
        │   ├── ProductCard.jsx ← Product display card
        │   └── RecipeCard.jsx  ← Recipe display card
        │
        ├── pages/              ← Page components
        │   ├── HomePage.jsx    ← Home/dashboard page
        │   ├── NearbyPage.jsx  ← Nearby shops page
        │   ├── RecipesPage.jsx ← Recipes page
        │   ├── ShoppingPage.jsx ← Shopping list page
        │   └── LoginPage.jsx   ← Login/auth page
        │
        ├── services/           ← API integration
        │   └── api.js          ← Axios client & API calls
        │
        ├── utils/              ← Utility functions
        │   ├── store.js        ← Zustand state management
        │   └── helpers.js      ← Helper functions
        │
        └── styles/
            └── index.css       ← Global CSS + Tailwind
```

---

## 📊 File Statistics

### Backend Files
```
Total: 17 files

Models (5):
  ├── User.js              (70 lines)
  ├── Shop.js              (80 lines)
  ├── Product.js           (60 lines)
  ├── Recipe.js            (70 lines)
  └── ShoppingList.js      (50 lines)

Controllers (5):
  ├── authController.js           (100 lines)
  ├── shopController.js           (120 lines)
  ├── productController.js        (100 lines)
  ├── recipeController.js         (130 lines)
  └── shoppingListController.js   (110 lines)

Routes (5):
  ├── authRoutes.js              (15 lines)
  ├── shopRoutes.js              (15 lines)
  ├── productRoutes.js           (15 lines)
  ├── recipeRoutes.js            (20 lines)
  └── shoppingListRoutes.js      (15 lines)

Middleware (2):
  ├── auth.js                    (35 lines)
  └── errorHandler.js            (20 lines)

Config (2):
  ├── database.js                (20 lines)
  └── constants.js               (30 lines)

Main (1):
  └── server.js                  (50 lines)
```

### Frontend Files
```
Total: 21 files

Pages (5):
  ├── HomePage.jsx       (80 lines)
  ├── NearbyPage.jsx     (70 lines)
  ├── RecipesPage.jsx    (65 lines)
  ├── ShoppingPage.jsx   (90 lines)
  └── LoginPage.jsx      (80 lines)

Components (5):
  ├── Header.jsx         (35 lines)
  ├── Footer.jsx         (50 lines)
  ├── ShopCard.jsx       (40 lines)
  ├── ProductCard.jsx    (45 lines)
  └── RecipeCard.jsx     (50 lines)

Services (1):
  └── api.js            (80 lines)

Utils (2):
  ├── store.js          (60 lines)
  └── helpers.js        (40 lines)

Styles (1):
  └── index.css         (40 lines)

Main (2):
  ├── App.jsx           (20 lines)
  └── main.jsx          (15 lines)

Config (4):
  ├── vite.config.js    (15 lines)
  ├── tailwind.config.js (15 lines)
  ├── postcss.config.js (8 lines)
  └── package.json      (30 lines)

Root (1):
  └── index.html        (15 lines)
```

### Documentation Files
```
Total: 8 files

├── README.md           (400+ lines)    - Complete project docs
├── SETUP.md            (150+ lines)    - Setup instructions
├── API.md              (500+ lines)    - API reference
├── QUICKSTART.md       (100+ lines)    - Quick start
├── PROJECT_SUMMARY.md  (300+ lines)    - Project overview
├── FILE_STRUCTURE.md   (This file)    - File structure
├── setup.sh            (50+ lines)     - Setup script
└── setup.bat           (50+ lines)     - Setup script

Configuration Files:
├── .gitignore          (40+ lines)     - Git ignore patterns
├── backend/.env.example (6 lines)      - Backend config template
└── backend/package.json (30 lines)     - Backend dependencies
```

---

## 🎯 File Purpose Guide

### Models (Database Schemas)
| File | Purpose |
|------|---------|
| User.js | User registration, profiles, preferences, geolocation |
| Shop.js | Shop/vendor management, reviews, hours, ratings |
| Product.js | Product inventory, pricing, discounts, availability |
| Recipe.js | Recipe data, ingredients, instructions, ratings |
| ShoppingList.js | User shopping lists and items |

### Controllers (Business Logic)
| File | Purpose |
|------|---------|
| authController.js | User registration, login, profile management |
| shopController.js | Shop CRUD, nearby search, reviews |
| productController.js | Product CRUD, search, price comparison |
| recipeController.js | Recipe retrieval, suggestions, ingredient search |
| shoppingListController.js | List CRUD, nearby item search |

### Routes (API Endpoints)
| File | Endpoints |
|------|-----------|
| authRoutes.js | /register, /login, /profile |
| shopRoutes.js | /nearby, /details, /reviews |
| productRoutes.js | /search, /create, /update |
| recipeRoutes.js | /list, /suggest, /find-nearby |
| shoppingListRoutes.js | /create, /update, /find-nearby |

### Pages (React Components)
| File | Purpose |
|------|---------|
| HomePage.jsx | Dashboard with categories |
| NearbyPage.jsx | Location-based shop listing |
| RecipesPage.jsx | Recipe browsing and suggestions |
| ShoppingPage.jsx | Shopping list management |
| LoginPage.jsx | User authentication |

### Components (Reusable)
| File | Purpose |
|------|---------|
| Header.jsx | Navigation bar |
| Footer.jsx | Footer links |
| ShopCard.jsx | Shop display card |
| ProductCard.jsx | Product display card |
| RecipeCard.jsx | Recipe display card |

### Utilities
| File | Purpose |
|------|---------|
| api.js | Axios client, API methods |
| store.js | Zustand state stores |
| helpers.js | Helper functions (distance, price, etc.) |

---

## 🔗 Key Connections

### Authentication Flow
```
LoginPage.jsx 
  ↓ (api.js)
  ↓ (authAPI.login)
  ↓ (backend/routes/authRoutes.js)
  ↓ (backend/controllers/authController.js)
  ↓ (backend/models/User.js)
  ↓ JWT Token
  ↓ (store.js - useAuthStore)
  ↓ HomePage.jsx
```

### Nearby Search Flow
```
HomePage.jsx / NearbyPage.jsx
  ↓ (useLocationStore)
  ↓ (api.js - shopsAPI.getNearbyShops)
  ↓ (backend/routes/shopRoutes.js)
  ↓ (backend/controllers/shopController.js)
  ↓ (backend/models/Shop.js)
  ↓ GeoJSON Query
  ↓ ShopCard.jsx
```

### Recipe Suggestion Flow
```
RecipesPage.jsx
  ↓ (api.js - recipesAPI.suggestRecipes)
  ↓ (backend/routes/recipeRoutes.js)
  ↓ (backend/controllers/recipeController.js)
  ↓ (backend/models/Recipe.js)
  ↓ (Ingredient matching)
  ↓ RecipeCard.jsx
  ↓ (Find nearby ingredients)
  ↓ (productController.findIngredientsNearby)
  ↓ ProductCard.jsx
```

---

## 📦 Dependencies Overview

### Backend Dependencies
```json
{
  "express": "^4.18.2",           // Web framework
  "mongoose": "^7.0.0",           // MongoDB ODM
  "mongodb": "^6.0.0",            // Database driver
  "cors": "^2.8.5",               // CORS middleware
  "jsonwebtoken": "^9.0.0",       // JWT auth
  "bcryptjs": "^2.4.3",           // Password hashing
  "dotenv": "^16.0.3"             // Environment variables
}
```

### Frontend Dependencies
```json
{
  "react": "^18.2.0",             // UI library
  "react-dom": "^18.2.0",         // React DOM
  "react-router-dom": "^6.11.0",  // Routing
  "axios": "^1.4.0",              // HTTP client
  "zustand": "^4.3.7",            // State management
  "tailwindcss": "^3.3.2",        // CSS framework
  "vite": "^4.3.9"                // Build tool
}
```

---

## 🚀 How to Use Each File

### For Developers
1. **Backend Development**: Edit files in `backend/src/`
2. **Frontend Development**: Edit files in `frontend/src/`
3. **API Testing**: Reference `API.md` for endpoints
4. **Debugging**: Check `backend/middleware/errorHandler.js`

### For Deployment
1. **Build Backend**: `npm run build` (when added)
2. **Build Frontend**: `npm run build` in frontend/
3. **Environment**: Use `.env` files
4. **Database**: Connect to MongoDB

### For Documentation
1. **Setup**: Follow `SETUP.md`
2. **Quick Start**: Use `QUICKSTART.md`
3. **API Reference**: See `API.md`
4. **Project Info**: Check `PROJECT_SUMMARY.md`

---

## 📝 Notes

- All files are production-ready
- Comments are included in complex logic
- Follow existing code patterns when adding new files
- Use the same naming conventions
- Keep components small and reusable
- Document new API endpoints in API.md

---

**For more information, see [README.md](README.md) and other documentation files.**
