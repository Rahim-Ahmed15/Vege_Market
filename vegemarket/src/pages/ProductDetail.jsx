import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { FiShoppingCart, FiHeart, FiStar } from 'react-icons/fi';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  if (!product) return <div className="p-12 text-center">Product not found</div>;
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="glass-card p-4 rounded-3xl">
          <img src={product.image} alt={product.name} className="w-full rounded-2xl" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center gap-2 mt-2">
            <FiStar className="text-amber-400" /> {product.rating} (120 reviews)
          </div>
          <div className="text-2xl font-bold text-emerald-700 mt-4">${product.price}</div>
          <p className="mt-4 text-gray-600">{product.description}</p>
          <div className="flex gap-4 mt-6">
            <button className="btn-primary flex items-center gap-2"><FiShoppingCart /> Add to Cart</button>
            <button className="btn-ghost flex items-center gap-2"><FiHeart /> Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
}