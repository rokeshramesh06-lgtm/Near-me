import './Header.css';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-3xl">🏠</span>
          <h1 className="text-2xl font-bold">HomeMate</h1>
        </div>
        <ul className="flex gap-6">
          <li><a href="/" className="hover:text-gray-100">Home</a></li>
          <li><a href="/nearby" className="hover:text-gray-100">Nearby</a></li>
          <li><a href="/recipes" className="hover:text-gray-100">Recipes</a></li>
          <li><a href="/shopping" className="hover:text-gray-100">Shopping</a></li>
          <li><a href="/profile" className="hover:text-gray-100">Profile</a></li>
        </ul>
      </nav>
    </header>
  );
}
