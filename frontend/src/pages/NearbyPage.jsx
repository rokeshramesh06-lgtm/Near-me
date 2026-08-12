import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocationStore } from '../utils/store';
import { shopsAPI } from '../services/api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShopCard from '../components/ShopCard';

export default function NearbyPage() {
  const [searchParams] = useSearchParams();
  const { latitude, longitude } = useLocationStore();
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const category = searchParams.get('category');

  useEffect(() => {
    if (latitude && longitude) {
      fetchNearbyShops();
    }
  }, [latitude, longitude, category]);

  const fetchNearbyShops = async () => {
    try {
      const params = {
        latitude,
        longitude,
        distance: 5000,
      };
      if (category) params.category = category;

      const response = await shopsAPI.getNearbyShops(params);
      setShops(response.data.shops);
    } catch (error) {
      console.error('Error fetching shops:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">
          {category ? `📍 ${category.charAt(0).toUpperCase() + category.slice(1)} Nearby` : '📍 Nearby Shops'}
        </h2>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading nearby shops...</p>
          </div>
        ) : shops.length === 0 ? (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <p className="text-yellow-800">No shops found in your area. Try expanding your search radius.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shops.map((shop) => (
              <ShopCard key={shop._id} shop={shop} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
