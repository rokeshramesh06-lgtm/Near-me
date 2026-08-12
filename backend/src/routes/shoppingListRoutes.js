import express from 'express';
import {
  createShoppingList,
  getShoppingLists,
  updateShoppingList,
  findItemsNearby,
  deleteShoppingList,
} from '../controllers/shoppingListController.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.post('/', authMiddleware, createShoppingList);
router.get('/', authMiddleware, getShoppingLists);
router.put('/:listId', authMiddleware, updateShoppingList);
router.post('/:listId/find-nearby', authMiddleware, findItemsNearby);
router.delete('/:listId', authMiddleware, deleteShoppingList);

export default router;
