import { useEffect, useState } from 'react';
import { recipesAPI } from '../services/api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await recipesAPI.getAllRecipes();
      setRecipes(response.data.recipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">🍳 What Can I Cook Today?</h2>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-green-800 mb-2">Tell Us What You Have</h3>
          <input
            type="text"
            placeholder="Enter ingredients you have (e.g., tomato, onion, potato, eggs)"
            className="w-full px-4 py-2 rounded border border-green-300 focus:outline-none focus:border-green-500"
          />
          <button className="mt-3 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
            Suggest Recipes
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading recipes...</p>
          </div>
        ) : recipes.length === 0 ? (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <p className="text-yellow-800">No recipes available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
