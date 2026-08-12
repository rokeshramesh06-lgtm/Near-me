# API Documentation - HomeMate

## Base URL
```
http://localhost:5000/api
```

## Authentication
All protected endpoints require a JWT token in the header:
```
Authorization: Bearer <token>
```

---

## 🔐 Authentication Endpoints

### Register User
```
POST /auth/register
Content-Type: application/json

Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "9876543210",
  "role": "homemaker|shop_owner",
  "latitude": 28.6139,
  "longitude": 77.2090
}

Response (201):
{
  "message": "User registered successfully",
  "token": "eyJhbGc...",
  "user": {
    "id": "507f...",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "homemaker"
  }
}
```

### Login User
```
POST /auth/login
Content-Type: application/json

Request Body:
{
  "email": "john@example.com",
  "password": "password123"
}

Response (200):
{
  "message": "Login successful",
  "token": "eyJhbGc...",
  "user": {
    "id": "507f...",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "homemaker"
  }
}
```

### Get User Profile
```
GET /auth/profile
Authorization: Bearer <token>

Response (200):
{
  "_id": "507f...",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "role": "homemaker",
  "location": {
    "type": "Point",
    "coordinates": [77.2090, 28.6139]
  },
  "preferences": {
    "vegetarian": true
  },
  "createdAt": "2024-01-15T10:30:00Z"
}
```

### Update User Profile
```
PUT /auth/profile
Authorization: Bearer <token>
Content-Type: application/json

Request Body:
{
  "name": "John Updated",
  "phone": "9876543210",
  "latitude": 28.6139,
  "longitude": 77.2090,
  "preferences": {
    "vegetarian": true,
    "priceRange": { "min": 0, "max": 1000 }
  }
}

Response (200):
{
  "message": "Profile updated successfully",
  "user": { ...updated user data }
}
```

---

## 🏪 Shop Endpoints

### Get Nearby Shops
```
GET /shops/nearby?latitude=28.6139&longitude=77.2090&category=vegetables&distance=5000

Query Parameters:
- latitude (required): User latitude
- longitude (required): User longitude
- category (optional): vegetables|grocery|medical|hotel|services
- distance (optional): Search radius in meters (default: 5000)

Response (200):
{
  "message": "Shops found",
  "count": 5,
  "shops": [
    {
      "_id": "507f...",
      "name": "Fresh Vegetable Market",
      "category": "vegetables",
      "address": "123 Market St",
      "phone": "1234567890",
      "rating": 4.5,
      "location": { "type": "Point", "coordinates": [...] }
    },
    ...
  ]
}
```

### Get Shop Details
```
GET /shops/:shopId

Response (200):
{
  "_id": "507f...",
  "name": "Fresh Vegetable Market",
  "category": "vegetables",
  "description": "Best quality vegetables",
  "phone": "1234567890",
  "address": "123 Market St",
  "openingHours": {
    "monday": { "open": "08:00", "close": "20:00" },
    ...
  },
  "rating": 4.5,
  "reviews": [
    {
      "userId": "507f...",
      "rating": 5,
      "comment": "Great quality!",
      "createdAt": "2024-01-15T10:30:00Z"
    }
  ],
  "ownerId": { "name": "Shop Owner", "phone": "..." }
}
```

### Create Shop (Shop Owner Only)
```
POST /shops
Authorization: Bearer <token>
Content-Type: application/json

Request Body:
{
  "name": "My Vegetable Shop",
  "category": "vegetables",
  "description": "Fresh vegetables daily",
  "phone": "1234567890",
  "address": "123 Market St",
  "latitude": 28.6139,
  "longitude": 77.2090
}

Response (201):
{
  "message": "Shop created successfully",
  "shop": { ...shop data }
}
```

### Update Shop (Shop Owner Only)
```
PUT /shops/:shopId
Authorization: Bearer <token>
Content-Type: application/json

Request Body:
{
  "name": "Updated Shop Name",
  "description": "Updated description",
  "openingHours": { ... }
}

Response (200):
{
  "message": "Shop updated successfully",
  "shop": { ...updated shop data }
}
```

### Add Review to Shop
```
POST /shops/:shopId/reviews
Authorization: Bearer <token>
Content-Type: application/json

Request Body:
{
  "rating": 5,
  "comment": "Excellent quality and service!"
}

Response (200):
{
  "message": "Review added successfully",
  "shop": { ...updated shop data with new review }
}
```

---

## 📦 Product Endpoints

### Search Products
```
GET /products/search?query=tomato&category=vegetables

Query Parameters:
- query (optional): Product name
- category (optional): Product category

Response (200):
{
  "message": "Products found",
  "count": 10,
  "products": [
    {
      "_id": "507f...",
      "name": "Tomato",
      "price": 40,
      "unit": "kg",
      "availability": true,
      "discount": 10,
      "discountedPrice": 36,
      "shopId": { "name": "Market", "address": "..." }
    },
    ...
  ]
}
```

### Get Products by Shop
```
GET /products/shop/:shopId

Response (200):
{
  "message": "Products found",
  "count": 15,
  "products": [ ... ]
}
```

### Create Product (Shop Owner Only)
```
POST /products
Authorization: Bearer <token>
Content-Type: application/json

Request Body:
{
  "shopId": "507f...",
  "name": "Tomato",
  "category": "vegetables",
  "price": 40,
  "unit": "kg",
  "stock": 100
}

Response (201):
{
  "message": "Product created successfully",
  "product": { ...product data }
}
```

### Update Product (Shop Owner Only)
```
PUT /products/:productId
Authorization: Bearer <token>
Content-Type: application/json

Request Body:
{
  "price": 45,
  "stock": 80,
  "discount": 5,
  "availability": true
}

Response (200):
{
  "message": "Product updated successfully",
  "product": { ...updated product data }
}
```

### Delete Product (Shop Owner Only)
```
DELETE /products/:productId
Authorization: Bearer <token>

Response (200):
{
  "message": "Product deleted successfully"
}
```

---

## 🍳 Recipe Endpoints

### Get All Recipes
```
GET /recipes

Response (200):
{
  "message": "Recipes found",
  "count": 50,
  "recipes": [
    {
      "_id": "507f...",
      "name": "Tomato Egg Curry",
      "description": "Spicy egg curry with tomatoes",
      "ingredients": [
        { "name": "Tomato", "quantity": 3, "unit": "pieces" },
        { "name": "Egg", "quantity": 4, "unit": "pieces" },
        ...
      ],
      "instructions": [ "Step 1...", "Step 2...", ... ],
      "cookingTime": 20,
      "servings": 4,
      "difficulty": "easy",
      "rating": 4.5
    },
    ...
  ]
}
```

### Get Recipe Details
```
GET /recipes/:recipeId

Response (200):
{
  "_id": "507f...",
  "name": "Tomato Egg Curry",
  "description": "...",
  "ingredients": [ ... ],
  "instructions": [ ... ],
  "cookingTime": 20,
  "servings": 4,
  "difficulty": "easy",
  "rating": 4.5,
  "reviews": [ ... ]
}
```

### Suggest Recipes
```
POST /recipes/suggest
Content-Type: application/json

Request Body:
{
  "availableIngredients": ["tomato", "onion", "potato", "eggs"]
}

Response (200):
{
  "message": "Recipes suggested",
  "count": 3,
  "recipes": [
    {
      "name": "Egg Curry",
      "ingredients": [ ... ]
    },
    ...
  ]
}
```

### Get Missing Ingredients
```
POST /recipes/missing-ingredients
Content-Type: application/json

Request Body:
{
  "recipeId": "507f...",
  "availableIngredients": ["tomato", "onion"]
}

Response (200):
{
  "message": "Missing ingredients found",
  "missingIngredients": [
    { "name": "Ginger", "quantity": 1, "unit": "piece" },
    { "name": "Garlic", "quantity": 3, "unit": "cloves" },
    ...
  ]
}
```

### Find Ingredients Nearby
```
POST /recipes/find-nearby
Authorization: Bearer <token>
Content-Type: application/json

Request Body:
{
  "ingredients": ["ginger", "garlic", "chilli powder"],
  "latitude": 28.6139,
  "longitude": 77.2090,
  "distance": 5000
}

Response (200):
{
  "message": "Ingredients found nearby",
  "count": 8,
  "products": [
    {
      "_id": "507f...",
      "name": "Ginger",
      "price": 50,
      "shopId": { "name": "Market", "address": "...", "rating": 4.5 }
    },
    ...
  ]
}
```

---

## 🛒 Shopping List Endpoints

### Create Shopping List
```
POST /shopping-lists
Authorization: Bearer <token>
Content-Type: application/json

Request Body:
{
  "name": "Weekly Shopping",
  "items": [
    { "name": "Tomato", "quantity": 2, "unit": "kg", "category": "vegetables" },
    { "name": "Rice", "quantity": 5, "unit": "kg", "category": "grocery" },
    ...
  ]
}

Response (201):
{
  "message": "Shopping list created successfully",
  "shoppingList": { ...list data }
}
```

### Get Shopping Lists
```
GET /shopping-lists
Authorization: Bearer <token>

Response (200):
{
  "message": "Shopping lists retrieved",
  "count": 3,
  "lists": [ ... ]
}
```

### Update Shopping List
```
PUT /shopping-lists/:listId
Authorization: Bearer <token>
Content-Type: application/json

Request Body:
{
  "name": "Updated List Name",
  "items": [ ... ]
}

Response (200):
{
  "message": "Shopping list updated successfully",
  "list": { ...updated list data }
}
```

### Find Items Nearby
```
POST /shopping-lists/:listId/find-nearby
Authorization: Bearer <token>
Content-Type: application/json

Request Body:
{
  "latitude": 28.6139,
  "longitude": 77.2090,
  "distance": 5000
}

Response (200):
{
  "message": "Items found nearby",
  "count": 12,
  "products": [ ... ]
}
```

### Delete Shopping List
```
DELETE /shopping-lists/:listId
Authorization: Bearer <token>

Response (200):
{
  "message": "Shopping list deleted successfully"
}
```

---

## ❌ Error Responses

### 401 Unauthorized
```json
{
  "message": "No token provided" or "Invalid token"
}
```

### 403 Forbidden
```json
{
  "message": "Admin access required" or "Shop owner access required"
}
```

### 404 Not Found
```json
{
  "message": "User not found" or "Shop not found"
}
```

### 500 Internal Server Error
```json
{
  "message": "Internal server error"
}
```

---

## 🧪 Example Workflow

1. **Register**: `POST /auth/register` → Get token
2. **Get Location**: Allow geolocation in browser
3. **Get Nearby Shops**: `GET /shops/nearby` with location
4. **Search Products**: `GET /products/search?query=tomato`
5. **Get Recipes**: `GET /recipes`
6. **Suggest Recipes**: `POST /recipes/suggest` with ingredients
7. **Find Ingredients**: `POST /recipes/find-nearby` with missing ingredients
8. **Create Shopping List**: `POST /shopping-lists` with items
9. **Find Items**: `POST /shopping-lists/:listId/find-nearby`

---

For more details, see [README.md](README.md)
