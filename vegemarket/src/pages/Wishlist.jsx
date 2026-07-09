import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiHeart, 
  FiShoppingCart, 
  FiTrash2, 
  FiShare2, 
  FiStar, 
  FiTruck, 
  FiShield,
  FiArrowLeft,
  FiArrowRight,
  FiEye,
  FiRefreshCw,
  FiGrid,
  FiList,
  FiMail,
  FiLink,
  FiTwitter,
  FiFacebook,
  FiClipboard,
  FiCheckCircle
} from 'react-icons/fi';

export default function Wishlist() {
  // Sample wishlist items - in a real app, this would come from state/context
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Organic Avocados',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=400&fit=crop',
      category: 'Fruits',
      rating: 4.8,
      reviews: 234,
      organic: true,
      inStock: true,
      discount: 15,
      description: 'Creamy, organic avocados perfect for guacamole.'
    },
    {
      id: 2,
      name: 'Fresh Strawberries',
      price: 5.49,
      image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop',
      category: 'Fruits',
      rating: 4.9,
      reviews: 189,
      organic: true,
      inStock: true,
      discount: 0,
      description: 'Sweet and juicy organic strawberries.'
    },
    {
      id: 3,
      name: 'Organic Quinoa',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
      category: 'Pantry',
      rating: 4.7,
      reviews: 156,
      organic: true,
      inStock: true,
      discount: 10,
      description: 'Premium organic quinoa, rich in protein.'
    },
    {
      id: 4,
      name: 'Artisan Sourdough',
      price: 6.99,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop',
      category: 'Bakery',
      rating: 4.6,
      reviews: 98,
      organic: false,
      inStock: false,
      discount: 0,
      description: 'Handcrafted sourdough bread with a crispy crust.'
    },
    {
      id: 5,
      name: 'Organic Honey',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop',
      category: 'Pantry',
      rating: 4.9,
      reviews: 312,
      organic: true,
      inStock: true,
      discount: 20,
      description: 'Raw organic honey from local farms.'
    },
    {
      id: 6,
      name: 'Fresh Almonds',
      price: 9.49,
      image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=400&fit=crop',
      category: 'Nuts',
      rating: 4.8,
      reviews: 267,
      organic: true,
      inStock: true,
      discount: 5,
      description: 'Premium quality raw almonds.'
    }
  ]);

  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [movedItems, setMovedItems] = useState([]);
  const [sharePopup, setSharePopup] = useState(null);
  const [copied, setCopied] = useState(false);

  // Remove from wishlist
  const removeFromWishlist = (id) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  // Move to cart
  const moveToCart = (id) => {
    setMovedItems(prev => [...prev, id]);
    setTimeout(() => {
      setWishlistItems(items => items.filter(item => item.id !== id));
      setMovedItems(prev => prev.filter(itemId => itemId !== id));
      // In a real app, you would add the item to cart state here
      alert('Item added to cart! 🛒');
    }, 600);
  };

  // Move all to cart
  const moveAllToCart = () => {
    if (wishlistItems.length === 0) return;
    const allIds = wishlistItems.map(item => item.id);
    setMovedItems(allIds);
    setTimeout(() => {
      setWishlistItems([]);
      setMovedItems([]);
      alert('All items moved to cart! 🛒');
    }, 800);
  };

  // Share wishlist
  const shareWishlist = () => {
    setSharePopup(true);
  };

  const copyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Calculate totals
  const totalItems = wishlistItems.length;
  const totalValue = wishlistItems.reduce((sum, item) => sum + item.price, 0);
  const averageRating = wishlistItems.length > 0 
    ? (wishlistItems.reduce((sum, item) => sum + item.rating, 0) / wishlistItems.length).toFixed(1)
    : 0;

  // Empty wishlist state
  if (wishlistItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-12 text-center"
        >
          <div className="text-8xl mb-6">❤️</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Your Wishlist is Empty</h2>
          <p className="text-gray-600 mb-8">Start adding your favorite products to your wishlist!</p>
          <Link to="/products" className="btn-primary inline-flex items-center gap-2">
            <FiArrowLeft /> Explore Products
          </Link>
          <div className="mt-8 flex justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">❤️ Save favorites</span>
            <span className="flex items-center gap-1">💰 Price alerts</span>
            <span className="flex items-center gap-1">🔄 Easy checkout</span>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap items-center justify-between gap-4 mb-8"
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center gap-3">
            <FiHeart className="text-rose-500 fill-rose-500" />
            My Wishlist
          </h1>
          <p className="text-gray-600 mt-1">
            {totalItems} items • ${totalValue.toFixed(2)} total value • ⭐ {averageRating} avg rating
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="glass p-1 rounded-full flex">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-full transition ${viewMode === 'grid' ? 'bg-emerald-500 text-white' : 'hover:bg-white/40'}`}
            >
              <FiGrid size={18} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-full transition ${viewMode === 'list' ? 'bg-emerald-500 text-white' : 'hover:bg-white/40'}`}
            >
              <FiList size={18} />
            </button>
          </div>
          {wishlistItems.length > 0 && (
            <button onClick={moveAllToCart} className="btn-primary text-sm py-2 px-4 flex items-center gap-2">
              <FiShoppingCart /> Move All to Cart
            </button>
          )}
          <button onClick={shareWishlist} className="btn-ghost text-sm py-2 px-4 flex items-center gap-2">
            <FiShare2 /> Share
          </button>
        </div>
      </motion.div>

      {/* Share Popup */}
      <AnimatePresence>
        {sharePopup && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSharePopup(false)}
          >
            <div className="glass-card p-8 max-w-md w-full" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <FiShare2 /> Share Wishlist
                </h3>
                <button onClick={() => setSharePopup(false)} className="p-2 hover:bg-white/40 rounded-full transition">
                  <FiTrash2 size={18} />
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={window.location.href} 
                    readOnly 
                    className="flex-1 glass-input text-sm py-2 px-3"
                  />
                  <button onClick={copyLink} className="btn-primary text-sm py-2 px-4">
                    {copied ? <FiCheckCircle /> : <FiClipboard />}
                  </button>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 btn-ghost text-sm py-2 flex items-center justify-center gap-2">
                    <FiFacebook /> Share
                  </button>
                  <button className="flex-1 btn-ghost text-sm py-2 flex items-center justify-center gap-2">
                    <FiTwitter /> Tweet
                  </button>
                  <button className="flex-1 btn-ghost text-sm py-2 flex items-center justify-center gap-2">
                    <FiMail /> Email
                  </button>
                </div>
                <p className="text-xs text-gray-500 text-center">Share your wishlist with friends and family! ❤️</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Wishlist Items */}
      <div className={viewMode === 'grid' 
        ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5' 
        : 'space-y-4'
      }>
        <AnimatePresence>
          {wishlistItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.05 }}
              className={viewMode === 'grid' 
                ? 'product-card p-4 flex flex-col'
                : 'glass-card p-4 flex flex-col md:flex-row items-start md:items-center gap-6'
              }
            >
              {/* Image */}
              <div className={viewMode === 'grid' 
                ? 'relative aspect-square rounded-2xl overflow-hidden bg-white/40' 
                : 'relative w-full md:w-40 h-40 rounded-2xl overflow-hidden bg-white/40 flex-shrink-0'
              }>
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                {item.discount > 0 && (
                  <span className="absolute top-2 right-2 bg-rose-400/80 backdrop-blur text-white text-xs px-3 py-1 rounded-full">
                    -{item.discount}%
                  </span>
                )}
                {item.organic && (
                  <span className="absolute top-2 left-2 bg-emerald-500/80 backdrop-blur text-white text-xs px-3 py-1 rounded-full">
                    🌱 Organic
                  </span>
                )}
                {!item.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white text-sm font-bold bg-black/50 px-4 py-2 rounded-full">Out of Stock</span>
                  </div>
                )}
                <div className="absolute bottom-2 left-2 right-2 flex justify-between">
                  <button 
                    onClick={() => removeFromWishlist(item.id)}
                    className="p-2 rounded-full bg-white/60 backdrop-blur hover:bg-rose-100 transition group"
                  >
                    <FiTrash2 className="text-gray-600 group-hover:text-rose-500" size={16} />
                  </button>
                  <Link to={`/product/${item.id}`}>
                    <button className="p-2 rounded-full bg-white/60 backdrop-blur hover:bg-emerald-100 transition group">
                      <FiEye className="text-gray-600 group-hover:text-emerald-600" size={16} />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 ${viewMode === 'grid' ? '' : 'w-full'}`}>
                <div className={viewMode === 'grid' ? 'mt-3' : 'flex flex-col md:flex-row md:items-center md:justify-between w-full gap-4'}>
                  <div className={viewMode === 'grid' ? '' : 'flex-1'}>
                    <div className="flex items-start justify-between">
                      <Link to={`/product/${item.id}`}>
                        <h4 className="font-semibold text-gray-800 hover:text-emerald-600 transition">
                          {item.name}
                        </h4>
                      </Link>
                      {viewMode === 'grid' && (
                        <span className="text-sm flex items-center gap-1">
                          <FiStar className="text-amber-400 fill-amber-400" size={14} />
                          {item.rating}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{item.category}</p>
                    {viewMode === 'list' && (
                      <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                    )}
                    <div className="flex items-center gap-4 mt-2">
                      <span className="font-bold text-lg text-emerald-700">${item.price.toFixed(2)}</span>
                      {item.discount > 0 && (
                        <span className="text-sm text-gray-400 line-through">
                          ${(item.price / (1 - item.discount / 100)).toFixed(2)}
                        </span>
                      )}
                    </div>
                    {viewMode === 'list' && (
                      <div className="flex items-center gap-4 mt-2">
                        <span className="flex items-center gap-1 text-sm">
                          <FiStar className="text-amber-400 fill-amber-400" />
                          {item.rating} ({item.reviews} reviews)
                        </span>
                        <span className={`text-sm ${item.inStock ? 'text-emerald-600' : 'text-rose-500'}`}>
                          {item.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className={`flex items-center gap-2 ${viewMode === 'grid' ? 'mt-3 w-full' : 'flex-shrink-0'}`}>
                    <button 
                      onClick={() => moveToCart(item.id)}
                      disabled={movedItems.includes(item.id) || !item.inStock}
                      className={`${viewMode === 'grid' ? 'w-full' : ''} btn-primary text-sm py-2 px-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      {movedItems.includes(item.id) ? (
                        <FiRefreshCw className="animate-spin" />
                      ) : (
                        <FiShoppingCart />
                      )}
                      {viewMode === 'grid' ? 'Add to Cart' : 'Move to Cart'}
                    </button>
                    {viewMode === 'list' && (
                      <button 
                        onClick={() => removeFromWishlist(item.id)}
                        className="btn-ghost text-sm py-2 px-3"
                      >
                        <FiTrash2 />
                      </button>
                    )}
                  </div>
                </div>
                {viewMode === 'grid' && (
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm flex items-center gap-1">
                      <FiStar className="text-amber-400 fill-amber-400" size={14} />
                      {item.rating}
                    </span>
                    <span className={`text-xs ${item.inStock ? 'text-emerald-600' : 'text-rose-500'}`}>
                      {item.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Quick Stats & Actions */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
      >
        <div className="glass-card p-4 text-center">
          <div className="text-2xl font-bold text-emerald-600">{totalItems}</div>
          <div className="text-sm text-gray-600">Items</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-2xl font-bold text-emerald-600">${totalValue.toFixed(2)}</div>
          <div className="text-sm text-gray-600">Total Value</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-2xl font-bold text-emerald-600">⭐ {averageRating}</div>
          <div className="text-sm text-gray-600">Avg Rating</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-2xl font-bold text-emerald-600">
            {wishlistItems.filter(item => item.inStock).length}
          </div>
          <div className="text-sm text-gray-600">In Stock</div>
        </div>
      </motion.div>

      {/* Recommendations */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-12"
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <FiHeart className="text-rose-400" /> Recommended for You
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="glass-card p-4 text-center hover:scale-105 transition">
              <div className="aspect-square rounded-xl bg-white/40 mb-3 flex items-center justify-center text-5xl">
                {['🥑', '🍇', '🥬', '🍊'][i-1]}
              </div>
              <p className="font-medium text-sm">Organic Item {i}</p>
              <p className="text-sm text-emerald-600 font-bold">${(4.99 + i).toFixed(2)}</p>
              <button className="btn-primary text-xs py-1 px-4 mt-2 w-full">Add to Wishlist ❤️</button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Actions */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap items-center justify-between gap-4 mt-8 p-6 glass-card"
      >
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <FiShield className="text-emerald-500" />
          <span>Your wishlist is private</span>
          <span className="w-px h-4 bg-gray-300"></span>
          <span>{wishlistItems.filter(item => item.discount > 0).length} items on sale</span>
        </div>
        <div className="flex gap-3">
          <Link to="/products">
            <button className="btn-ghost text-sm flex items-center gap-2">
              <FiArrowLeft /> Continue Shopping
            </button>
          </Link>
          <Link to="/cart">
            <button className="btn-primary text-sm flex items-center gap-2">
              Go to Cart <FiArrowRight />
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}