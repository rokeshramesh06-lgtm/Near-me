import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NearbyPage from './pages/NearbyPage';
import RecipesPage from './pages/RecipesPage';
import ShoppingPage from './pages/ShoppingPage';
import LoginPage from './pages/LoginPage';
import './styles/index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nearby" element={<NearbyPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/shopping" element={<ShoppingPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
