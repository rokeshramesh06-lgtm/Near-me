export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="mb-3">
        <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-green-600">₹{product.price}/{product.unit}</span>
          {product.discount && (
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
              {product.discount}% OFF
            </span>
          )}
        </div>
        <p className={`text-sm ${product.availability ? 'text-green-600' : 'text-red-600'}`}>
          {product.availability ? '✓ Available' : '✗ Out of Stock'}
        </p>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Details
        </button>
        <button className="flex-1 bg-green-500 text-white py-2 rounded hover:bg-green-600">
          Add to List
        </button>
      </div>
    </div>
  );
}
