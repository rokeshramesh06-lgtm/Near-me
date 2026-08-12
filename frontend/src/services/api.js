import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to request headers
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  register: (data) => apiClient.post('/auth/register', data),
  login: (data) => apiClient.post('/auth/login', data),
  getProfile: () => apiClient.get('/auth/profile'),
  updateProfile: (data) => apiClient.put('/auth/profile', data),
};

// Shops API
export const shopsAPI = {
  getNearbyShops: (params) => apiClient.get('/shops/nearby', { params }),
  getShopDetails: (shopId) => apiClient.get(`/shops/${shopId}`),
  createShop: (data) => apiClient.post('/shops', data),
  updateShop: (shopId, data) => apiClient.put(`/shops/${shopId}`, data),
  addReview: (shopId, data) => apiClient.post(`/shops/${shopId}/reviews`, data),
};

// Products API
export const productsAPI = {
  searchProducts: (params) => apiClient.get('/products/search', { params }),
  getProductsByShop: (shopId) => apiClient.get(`/products/shop/${shopId}`),
  createProduct: (data) => apiClient.post('/products', data),
  updateProduct: (productId, data) => apiClient.put(`/products/${productId}`, data),
  deleteProduct: (productId) => apiClient.delete(`/products/${productId}`),
};

// Recipes API
export const recipesAPI = {
  getAllRecipes: () => apiClient.get('/recipes'),
  getRecipeById: (recipeId) => apiClient.get(`/recipes/${recipeId}`),
  suggestRecipes: (data) => apiClient.post('/recipes/suggest', data),
  getMissingIngredients: (data) => apiClient.post('/recipes/missing-ingredients', data),
  findIngredientsNearby: (data) => apiClient.post('/recipes/find-nearby', data),
  createRecipe: (data) => apiClient.post('/recipes', data),
};

// Shopping Lists API
export const shoppingListsAPI = {
  createList: (data) => apiClient.post('/shopping-lists', data),
  getLists: () => apiClient.get('/shopping-lists'),
  updateList: (listId, data) => apiClient.put(`/shopping-lists/${listId}`, data),
  findItemsNearby: (listId, data) => apiClient.post(`/shopping-lists/${listId}/find-nearby`, data),
  deleteList: (listId) => apiClient.delete(`/shopping-lists/${listId}`),
};

export default apiClient;
