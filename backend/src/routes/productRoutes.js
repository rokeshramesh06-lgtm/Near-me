import express from 'express';
import {
  getProductsByShop,
  searchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';
import { authMiddleware, shopOwnerMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.get('/search', searchProducts);
router.get('/shop/:shopId', getProductsByShop);
router.post('/', authMiddleware, shopOwnerMiddleware, createProduct);
router.put('/:productId', authMiddleware, shopOwnerMiddleware, updateProduct);
router.delete('/:productId', authMiddleware, shopOwnerMiddleware, deleteProduct);

export default router;
