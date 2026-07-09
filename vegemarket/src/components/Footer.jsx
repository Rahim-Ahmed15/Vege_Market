import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="glass-nav mt-12 px-6 md:px-12 py-10 text-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-emerald-800 text-lg mb-3">VegeMarket</h4>
          <p className="text-sm opacity-70">Fresh organic grocery delivered to your doorstep.</p>
          <div className="flex gap-3 mt-4">
            <FiFacebook className="hover:text-emerald-600 cursor-pointer" />
            <FiTwitter className="hover:text-emerald-600 cursor-pointer" />
            <FiInstagram className="hover:text-emerald-600 cursor-pointer" />
          </div>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Quick Links</h5>
          <ul className="text-sm space-y-2 opacity-70">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/products">Shop</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Categories</h5>
          <ul className="text-sm space-y-2 opacity-70">
            <li>Fruits</li><li>Vegetables</li><li>Nuts & Dates</li><li>Bakery</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Contact</h5>
          <ul className="text-sm space-y-2 opacity-70">
            <li className="flex items-center gap-2"><FiMail /> hello@vegemarket.com</li>
            <li className="flex items-center gap-2"><FiPhone /> +1 234 567 890</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs opacity-50 mt-8 border-t border-white/30 pt-6">© 2026 VegeMarket — organic & fresh</div>
    </footer>
  );
}