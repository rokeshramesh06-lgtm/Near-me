import express from 'express';
import {
  getAllRecipes,
  getRecipeById,
  suggestRecipes,
  getMissingIngredients,
  findIngredientsNearby,
  createRecipe,
} from '../controllers/recipeController.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllRecipes);
router.get('/:recipeId', getRecipeById);
router.post('/suggest', suggestRecipes);
router.post('/missing-ingredients', getMissingIngredients);
router.post('/find-nearby', authMiddleware, findIngredientsNearby);
router.post('/', authMiddleware, createRecipe);

export default router;
