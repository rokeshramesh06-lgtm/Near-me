import Recipe from '../models/Recipe.js';
import Product from '../models/Product.js';

export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json({
      message: 'Recipes found',
      count: recipes.length,
      recipes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRecipeById = async (req, res) => {
  try {
    const { recipeId } = req.params;
    const recipe = await Recipe.findById(recipeId);

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const suggestRecipes = async (req, res) => {
  try {
    const { availableIngredients } = req.body;

    const recipes = await Recipe.find({
      ingredients: {
        $elemMatch: {
          name: { $in: availableIngredients },
        },
      },
    });

    res.json({
      message: 'Recipes suggested',
      count: recipes.length,
      recipes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMissingIngredients = async (req, res) => {
  try {
    const { recipeId, availableIngredients } = req.body;
    
    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    const missingIngredients = recipe.ingredients.filter(
      (ingredient) => !availableIngredients.includes(ingredient.name)
    );

    res.json({
      message: 'Missing ingredients found',
      missingIngredients,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const findIngredientsNearby = async (req, res) => {
  try {
    const { ingredients, latitude, longitude, distance = 5000 } = req.body;

    const products = await Product.find({
      name: { $in: ingredients },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: distance,
        },
      },
    }).populate('shopId', 'name address phone rating');

    res.json({
      message: 'Ingredients found nearby',
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createRecipe = async (req, res) => {
  try {
    const { name, description, ingredients, instructions, cookingTime, servings, difficulty } = req.body;

    const recipe = new Recipe({
      name,
      description,
      ingredients,
      instructions,
      cookingTime,
      servings,
      difficulty,
    });

    await recipe.save();

    res.status(201).json({
      message: 'Recipe created successfully',
      recipe,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
