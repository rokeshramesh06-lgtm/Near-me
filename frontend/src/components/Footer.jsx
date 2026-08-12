export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">About HomeMate</h3>
            <p className="text-gray-400">Your daily helper for finding what you need nearby.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="text-gray-400">Email: hello@homemate.com</p>
            <p className="text-gray-400">Phone: +91 1234567890</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 HomeMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
