import express from 'express';
import {
  getNearbyShops,
  getShopDetails,
  createShop,
  updateShop,
  addReview,
} from '../controllers/shopController.js';
import { authMiddleware, shopOwnerMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.get('/nearby', getNearbyShops);
router.get('/:shopId', getShopDetails);
router.post('/', authMiddleware, shopOwnerMiddleware, createShop);
router.put('/:shopId', authMiddleware, shopOwnerMiddleware, updateShop);
router.post('/:shopId/reviews', authMiddleware, addReview);

export default router;
