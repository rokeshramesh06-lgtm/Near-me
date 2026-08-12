import { useEffect, useState } from 'react';
import { useAuthStore, useShoppingStore } from '../utils/store';
import { shoppingListsAPI } from '../services/api';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ShoppingPage() {
  const { isAuthenticated } = useAuthStore();
  const { items, addItem, removeItem } = useShoppingStore();
  const [lists, setLists] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      fetchShoppingLists();
    }
  }, [isAuthenticated]);

  const fetchShoppingLists = async () => {
    try {
      const response = await shoppingListsAPI.getLists();
      setLists(response.data.lists);
    } catch (error) {
      console.error('Error fetching shopping lists:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddItem = async () => {
    if (!newItem.trim()) return;

    const item = {
      name: newItem,
      quantity: 1,
      unit: 'kg',
      completed: false,
    };

    addItem(item);
    setNewItem('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">🛒 Shopping Assistant</h2>

        {!isAuthenticated ? (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-blue-800 mb-4">Please login to use the shopping list feature.</p>
            <a href="/login" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
              Login
            </a>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Add Item Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-4">📝 Add Items to Your List</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  placeholder="e.g., Tomato, Onion, Rice..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                />
                <button
                  onClick={handleAddItem}
                  className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
                >
                  Add
                </button>
              </div>
            </div>

            {/* Shopping Lists */}
            {loading ? (
              <p className="text-center text-gray-600">Loading your lists...</p>
            ) : lists.length === 0 ? (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <p className="text-yellow-800">No shopping lists yet. Create one to get started!</p>
              </div>
            ) : (
              <div className="grid gap-6">
                {lists.map((list) => (
                  <div key={list._id} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-bold text-lg mb-4">{list.name}</h3>
                    <ul className="space-y-2">
                      {list.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <input type="checkbox" />
                          <span>{item.name} × {item.quantity} {item.unit}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                      Find Items Nearby
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
