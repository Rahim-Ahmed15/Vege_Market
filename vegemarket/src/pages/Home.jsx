import { motion } from 'framer-motion';
import { FiSearch, FiDroplet, FiTruck, FiShield } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import { products, categories } from '../data/products';

export default function Home() {
  const featured = products.slice(0, 6);
  const bestSellers = products.slice(6, 12);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      {/* Hero */}
      <section className="relative rounded-[40px] overflow-hidden mt-4 glass-card p-8 md:p-16 floating-bg">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-block bg-emerald-100/60 backdrop-blur-sm px-4 py-1 rounded-full text-emerald-700 text-sm font-medium mb-4">🌱 Fresh & Organic</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-800">Fresh Organic Vegetables</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-md">Farm-to-table groceries, handpicked for your health and taste.</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="btn-primary">Shop Now →</button>
            <button className="btn-ghost">Explore</button>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-20 text-9xl select-none">🥑</div>
      </section>

      {/* Search bar */}
      <div className="relative max-w-xl mx-auto mt-6 z-20">
        <div className="glass-card p-1 flex items-center shadow-lg">
          <FiSearch className="ml-4 text-gray-400" size={20} />
          <input type="text" placeholder="Search for fresh produce..." className="w-full p-3 bg-transparent focus:outline-none text-sm" />
          <button className="btn-primary text-sm py-2 px-6 rounded-full mr-1">Search</button>
        </div>
      </div>

      {/* Categories */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.slice(0, 8).map((cat) => <CategoryCard key={cat.id} {...cat} />)}
        </div>
      </section>

      {/* Featured Products */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Best Sellers</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {bestSellers.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: <FiDroplet />, title: '100% Organic', desc: 'Certified fresh from farms.' },
          { icon: <FiTruck />, title: 'Free Delivery', desc: 'On orders above $50.' },
          { icon: <FiShield />, title: 'Quality Guarantee', desc: 'Satisfaction assured.' }
        ].map((item, i) => (
          <div key={i} className="glass-card p-6 flex flex-col items-center text-center">
            <div className="text-3xl text-emerald-600 mb-3">{item.icon}</div>
            <h4 className="font-semibold">{item.title}</h4>
            <p className="text-sm opacity-60">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Newsletter */}
      <section className="mt-20 glass-card p-8 md:p-12 text-center">
        <h3 className="text-2xl font-semibold">Fresh news, delivered</h3>
        <p className="opacity-60 mt-2">Subscribe for organic recipes & offers.</p>
        <div className="flex flex-wrap justify-center gap-3 mt-6 max-w-md mx-auto">
          <input type="email" placeholder="Your email" className="glass-input flex-1 min-w-[200px]" />
          <button className="btn-primary">Subscribe</button>
        </div>
      </section>
    </div>
  );
}