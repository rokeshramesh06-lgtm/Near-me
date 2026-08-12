import { useEffect, useState } from 'react';
import { useLocationStore } from '../utils/store';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomePage() {
  const { latitude, longitude, getCurrentLocation } = useLocationStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentLocation().then(() => setLoading(false)).catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Getting your location...</p>
      </div>
    );
  }

  const categories = [
    { icon: '🥕', name: 'Vegetables', slug: 'vegetables' },
    { icon: '🛒', name: 'Grocery', slug: 'grocery' },
    { icon: '🍳', name: 'Ingredients', slug: 'ingredients' },
    { icon: '🍽️', name: 'Hotels', slug: 'hotels' },
    { icon: '🚌', name: 'Bus', slug: 'bus' },
    { icon: '🛺', name: 'Auto', slug: 'auto' },
    { icon: '💊', name: 'Medical', slug: 'medical' },
    { icon: '🏥', name: 'Hospital', slug: 'hospital' },
    { icon: '🧹', name: 'Services', slug: 'services' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-8 mb-8">
          <h2 className="text-4xl font-bold mb-4">🏠 HomeMate</h2>
          <p className="text-xl mb-4">Everything you need, right around your home.</p>
          <p className="text-gray-100">Location: {latitude && longitude ? `${latitude.toFixed(4)}, ${longitude.toFixed(4)}` : 'Not detected'}</p>
        </section>

        {/* Search Bar */}
        <section className="mb-8">
          <input
            type="text"
            placeholder="🔍 What are you looking for today?"
            className="w-full px-4 py-3 rounded-lg border-2 border-green-500 focus:outline-none focus:border-green-600"
          />
        </section>

        {/* Categories Grid */}
        <section>
          <h3 className="text-2xl font-bold mb-6">Quick Categories</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <a
                key={cat.slug}
                href={`/nearby?category=${cat.slug}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center cursor-pointer"
              >
                <div className="text-4xl mb-2">{cat.icon}</div>
                <p className="font-semibold text-gray-800">{cat.name}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Featured Section */}
        <section className="mt-12">
          <h3 className="text-2xl font-bold mb-6">📍 Find Near Me</h3>
          <button className="w-full bg-green-500 text-white py-4 rounded-lg text-xl font-bold hover:bg-green-600 transition">
            📍 FIND NEAR ME
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
