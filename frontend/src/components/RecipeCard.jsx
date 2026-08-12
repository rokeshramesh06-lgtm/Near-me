export default function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {recipe.image && (
        <img src={recipe.image} alt={recipe.name} className="w-full h-40 object-cover" />
      )}
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{recipe.name}</h3>
        
        <div className="space-y-2 text-sm text-gray-600 mb-4">
          {recipe.cookingTime && <p>⏱️ {recipe.cookingTime} mins</p>}
          {recipe.servings && <p>👥 {recipe.servings} servings</p>}
          {recipe.difficulty && (
            <p>
              📊 Difficulty: <span className="capitalize">{recipe.difficulty}</span>
            </p>
          )}
        </div>

        <div className="flex gap-2">
          <button className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            View Recipe
          </button>
          <button className="flex-1 bg-green-500 text-white py-2 rounded hover:bg-green-600">
            Find Ingredients
          </button>
        </div>
      </div>
    </div>
  );
}
