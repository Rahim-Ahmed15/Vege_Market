import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function ProductCard({ product }) {
  const { id, name, price, discount, rating, image, organic, stock } = product;
  return (
    <motion.div whileHover={{ y: -6 }} className="product-card p-4 flex flex-col">
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-white/40">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        {organic && <span className="absolute top-2 left-2 bg-emerald-500/80 backdrop-blur text-white text-xs px-3 py-1 rounded-full">Organic</span>}
        {discount > 0 && <span className="absolute top-2 right-2 bg-rose-400/80 backdrop-blur text-white text-xs px-3 py-1 rounded-full">-{discount}%</span>}
        <button className="absolute bottom-2 right-2 p-2 rounded-full glass hover:bg-white/60 transition"><FiHeart /></button>
      </div>
      <div className="mt-3 flex justify-between items-start">
        <Link to={`/product/${id}`}><h4 className="font-medium text-gray-800 hover:text-emerald-700">{name}</h4></Link>
        <span className="text-sm flex items-center gap-1"><FiStar className="text-amber-400" /> {rating || 4.5}</span>
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="font-bold text-lg text-emerald-700">${price}</span>
        {stock > 0 ? <span className="text-xs text-emerald-600">In stock</span> : <span className="text-xs text-rose-500">Out of stock</span>}
      </div>
      <button className="mt-3 w-full btn-primary text-sm py-2 flex items-center justify-center gap-2"><FiShoppingCart /> Add</button>
    </motion.div>
  );
}

