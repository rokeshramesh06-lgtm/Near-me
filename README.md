# HomeMate - Homemaker Daily Helper Website

## 🌸 Project Overview

**HomeMate** is a full-stack web application designed to help homemakers find daily household needs nearby. It simplifies the search for vegetables, groceries, ingredients, hotels, medical services, and more—all from one intuitive platform.

### Tagline
**"Everything you need, right around your home."**

---

## 🏗️ Project Structure

```
HomeMate/
├── frontend/                    # React + Vite frontend
│   ├── src/
│   │   ├── components/         # Reusable React components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ShopCard.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── RecipeCard.jsx
│   │   ├── pages/              # Page components
│   │   │   ├── HomePage.jsx
│   │   │   ├── NearbyPage.jsx
│   │   │   ├── RecipesPage.jsx
│   │   │   ├── ShoppingPage.jsx
│   │   │   └── LoginPage.jsx
│   │   ├── services/           # API service layer
│   │   │   └── api.js
│   │   ├── utils/              # Utility functions
│   │   │   ├── store.js        # Zustand state management
│   │   │   └── helpers.js      # Helper functions
│   │   ├── styles/             # Global styles
│   │   ├── App.jsx             # Main app component
│   │   └── main.jsx            # Entry point
│   ├── index.html              # HTML template
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── backend/                     # Node.js + Express backend
│   ├── src/
│   │   ├── models/             # MongoDB Mongoose schemas
│   │   │   ├── User.js
│   │   │   ├── Shop.js
│   │   │   ├── Product.js
│   │   │   ├── Recipe.js
│   │   │   └── ShoppingList.js
│   │   ├── controllers/        # Business logic
│   │   │   ├── authController.js
│   │   │   ├── shopController.js
│   │   │   ├── productController.js
│   │   │   ├── recipeController.js
│   │   │   └── shoppingListController.js
│   │   ├── routes/             # API endpoints
│   │   │   ├── authRoutes.js
│   │   │   ├── shopRoutes.js
│   │   │   ├── productRoutes.js
│   │   │   ├── recipeRoutes.js
│   │   │   └── shoppingListRoutes.js
│   │   ├── middleware/         # Express middleware
│   │   │   ├── auth.js         # Authentication & authorization
│   │   │   └── errorHandler.js
│   │   ├── config/             # Configuration files
│   │   │   ├── database.js
│   │   │   └── constants.js
│   │   └── server.js           # Main server file
│   ├── package.json
│   └── .env.example            # Environment variables template
│
└── README.md                    # This file
```

---

## 🎯 Key Features

### 1. **Daily Home Dashboard** 🏠
- Quick access to all categories of services
- Location-based nearby services
- Real-time availability updates

### 2. **Nearby Vegetable Market** 🥕
- Search for vegetables with current prices
- Distance from home
- Shop ratings and opening hours
- Direct call and navigation options

### 3. **Recipe → Ingredients Feature** 🍳
- Suggest recipes based on available ingredients
- Show missing ingredients
- Find missing ingredients at nearby shops
- Price comparison

### 4. **Nearby Hotels** 🍽️
- Filter by distance, rating, price
- Vegetarian/non-vegetarian options
- Menu and prices
- Home delivery availability

### 5. **Bus & Auto Helper** 🚌 🛺
- Find nearby bus stops with timings
- Auto stand locations
- Distance and contact information

### 6. **Shopping List Assistant** 🛒
- Create and manage shopping lists
- Find items at nearby shops
- Price comparison across stores

### 7. **Medical Services** 💊 🏥
- Nearby pharmacies and hospitals
- Opening hours and emergency info
- Phone and directions

### 8. **Home Services** 🧹
- Cleaning, plumbing, electrical repairs
- AC service, carpentry, laundry
- Cook and appliance repair services
- Ratings and contact information

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (v4.4 or higher)
- **npm** or **yarn**

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file:**
   ```bash
   cp .env.example .env
   ```

4. **Update `.env` with your configuration:**
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/homemate
   JWT_SECRET=your_secure_jwt_secret_here
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173
   ```

5. **Start MongoDB** (if running locally):
   ```bash
   mongod
   ```

6. **Start the backend server:**
   ```bash
   npm run dev
   ```

   The server will start at `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   The application will open at `http://localhost:5173`

---

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (requires auth)
- `PUT /api/auth/profile` - Update user profile (requires auth)

### Shops
- `GET /api/shops/nearby` - Get nearby shops
- `GET /api/shops/:shopId` - Get shop details
- `POST /api/shops` - Create shop (shop owner only)
- `PUT /api/shops/:shopId` - Update shop (shop owner only)
- `POST /api/shops/:shopId/reviews` - Add review

### Products
- `GET /api/products/search` - Search products
- `GET /api/products/shop/:shopId` - Get products by shop
- `POST /api/products` - Create product (shop owner only)
- `PUT /api/products/:productId` - Update product (shop owner only)
- `DELETE /api/products/:productId` - Delete product (shop owner only)

### Recipes
- `GET /api/recipes` - Get all recipes
- `GET /api/recipes/:recipeId` - Get recipe details
- `POST /api/recipes/suggest` - Suggest recipes based on ingredients
- `POST /api/recipes/missing-ingredients` - Get missing ingredients
- `POST /api/recipes/find-nearby` - Find missing ingredients nearby

### Shopping Lists
- `POST /api/shopping-lists` - Create shopping list
- `GET /api/shopping-lists` - Get user's shopping lists
- `PUT /api/shopping-lists/:listId` - Update shopping list
- `POST /api/shopping-lists/:listId/find-nearby` - Find items nearby
- `DELETE /api/shopping-lists/:listId` - Delete shopping list

---

## 🗄️ Database Schema

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  phone: String,
  role: 'homemaker' | 'shop_owner' | 'admin',
  location: GeoJSON Point,
  address: String,
  preferences: {
    vegetarian: Boolean,
    priceRange: { min, max }
  },
  createdAt: Date
}
```

### Shop Model
```javascript
{
  ownerId: ObjectId (ref: User),
  name: String,
  category: String,
  description: String,
  phone: String,
  location: GeoJSON Point,
  address: String,
  openingHours: { day: { open, close } },
  rating: Number,
  reviews: Array,
  isVerified: Boolean,
  createdAt: Date
}
```

### Product Model
```javascript
{
  shopId: ObjectId (ref: Shop),
  name: String,
  category: String,
  price: Number,
  unit: String,
  availability: Boolean,
  stock: Number,
  discount: Number,
  discountedPrice: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Recipe Model
```javascript
{
  name: String,
  description: String,
  ingredients: Array,
  instructions: Array,
  cookingTime: Number,
  servings: Number,
  difficulty: 'easy' | 'medium' | 'hard',
  rating: Number,
  reviews: Array,
  createdAt: Date
}
```

### Shopping List Model
```javascript
{
  userId: ObjectId (ref: User),
  name: String,
  items: Array,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🎨 Frontend Components

### Pages
- **HomePage** - Main landing page with categories
- **NearbyPage** - Display nearby shops filtered by category
- **RecipesPage** - Recipe suggestions and search
- **ShoppingPage** - Shopping list management
- **LoginPage** - User authentication

### Components
- **Header** - Navigation bar
- **Footer** - Footer with links
- **ShopCard** - Shop display card
- **ProductCard** - Product display card
- **RecipeCard** - Recipe display card

---

## 🔐 Authentication & Security

- **JWT Tokens** for stateless authentication
- **bcrypt** for password hashing
- **CORS** enabled for frontend-backend communication
- **Role-based access control** (homemaker, shop owner, admin)

---

## 📦 Technologies Used

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **React Router** - Navigation
- **Zustand** - State management
- **Axios** - HTTP client
- **Tailwind CSS** - Styling

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

---

## 🛠️ Development Commands

### Backend
```bash
# Start development server with auto-reload
npm run dev

# Start production server
npm start

# Run tests
npm test
```

### Frontend
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 🚀 Deployment

### Backend Deployment (Heroku, AWS, etc.)
1. Set up environment variables on hosting platform
2. Ensure MongoDB connection string is set
3. Deploy using platform-specific tools

### Frontend Deployment (Vercel, Netlify, etc.)
1. Build the frontend: `npm run build`
2. Deploy the `dist` folder to your hosting platform
3. Configure environment variables for API URL

---

## 📝 Future Enhancements

- [ ] Real-time notifications for price drops
- [ ] Integration with payment gateways
- [ ] Loyalty programs and discounts
- [ ] Mobile app (React Native)
- [ ] Advanced search with filters
- [ ] User ratings and reviews
- [ ] Shop analytics dashboard
- [ ] Admin panel for moderation
- [ ] Multi-language support
- [ ] Dark mode theme

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 📧 Contact

For questions or feedback, please contact: **hello@homemate.com**

---

**Happy Coding! 🎉**
