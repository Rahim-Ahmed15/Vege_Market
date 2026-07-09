import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Products() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-wrap gap-3 mb-8 mt-4">
        {['all', ...new Set(products.map(p => p.category))].map(cat => (
          <button key={cat} onClick={() => setFilter(cat)} className={`px-5 py-2 rounded-full text-sm font-medium transition ${filter === cat ? 'bg-emerald-600 text-white' : 'glass hover:bg-white/60'}`}>
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}