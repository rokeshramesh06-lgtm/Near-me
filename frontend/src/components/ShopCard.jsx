import { useEffect, useState } from 'react';
import { shopsAPI } from '../services/api';

export default function ShopCard({ shop }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold text-gray-800">{shop.name}</h3>
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
          {shop.category}
        </span>
      </div>
      
      <div className="space-y-2 text-sm text-gray-600 mb-4">
        <p>📍 {shop.address}</p>
        <p>📞 {shop.phone}</p>
        {shop.rating && (
          <p>⭐ {shop.rating.toFixed(1)} / 5.0</p>
        )}
      </div>

      <div className="flex gap-2">
        <button className="flex-1 bg-green-500 text-white py-2 rounded hover:bg-green-600">
          📍 Directions
        </button>
        <button className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          📞 Call
        </button>
      </div>
    </div>
  );
}
