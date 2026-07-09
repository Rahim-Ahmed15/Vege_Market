import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FiSearch, FiHeart, FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = ['Products', 'About', 'Contact'];

export default function Navbar() {
  console.log('Navbar rendering');
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="glass-nav fixed top-0 w-full z-50 px-4 md:px-8 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Link to="/" className="text-2xl font-bold tracking-tight text-emerald-700 flex items-center gap-1">
          <span className="text-3xl">🌿</span> VegeMarket
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
        {navLinks.map((item) => (
          <NavLink key={item} to={item === 'Products' ? '/products' : `/${item.toLowerCase()}`} className={({ isActive }) => `px-3 py-1 rounded-full transition ${isActive ? 'bg-emerald-100/60 text-emerald-800' : 'hover:bg-white/40'}`}>
            {item}
          </NavLink>
        ))}
        <div className="relative">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search fresh food..." className="glass-input pl-10 pr-4 py-2 w-48 text-sm" />
        </div>
        <div className="flex items-center gap-3">
          <Link to="/wishlist" className="p-2 rounded-full hover:bg-white/50 transition"><FiHeart /></Link>
          <Link to="/cart" className="p-2 rounded-full hover:bg-white/50 transition relative"><FiShoppingCart /><span className="absolute -top-0.5 -right-0.5 bg-emerald-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">3</span></Link>
          <Link to="/login" className="p-2 rounded-full hover:bg-white/50 transition"><FiUser /></Link>
        </div>
      </div>

      <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 rounded-full glass">
        {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute top-full left-0 right-0 glass-card mx-4 mt-2 p-6 flex flex-col gap-4 md:hidden">
            {navLinks.map((item) => (
              <Link key={item} to={item === 'Products' ? '/products' : `/${item.toLowerCase()}`} className="text-lg font-medium" onClick={() => setMobileOpen(false)}>{item}</Link>
            ))}
            <div className="flex items-center gap-4 pt-2 border-t border-white/40">
              <Link to="/wishlist"><FiHeart size={22} /></Link>
              <Link to="/cart"><FiShoppingCart size={22} /></Link>
              <Link to="/login"><FiUser size={22} /></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}