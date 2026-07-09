import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiShoppingCart, 
  FiTrash2, 
  FiPlus, 
  FiMinus, 
  FiHeart, 
  FiTag, 
  FiTruck, 
  FiShield,
  FiArrowLeft,
  FiArrowRight,
  FiX,
  FiGift
} from 'react-icons/fi';

export default function Cart() {
  // Sample cart items - in a real app, this would come from state/context
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Organic Apples',
      price: 4.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop',
      category: 'Fruits',
      organic: true,
      inStock: true,
      maxQuantity: 10
    },
    {
      id: 2,
      name: 'Fresh Spinach',
      price: 3.49,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop',
      category: 'Vegetables',
      organic: true,
      inStock: true,
      maxQuantity: 8
    },
    {
      id: 3,
      name: 'Organic Milk',
      price: 5.99,
      quantity: 3,
      image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?w=400&h=400&fit=crop',
      category: 'Dairy',
      organic: true,
      inStock: true,
      maxQuantity: 5
    },
    {
      id: 4,
      name: 'Whole Grain Bread',
      price: 4.49,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400&fit=crop',
      category: 'Bakery',
      organic: false,
      inStock: false,
      maxQuantity: 0
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax - discount;

  // Update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.min(newQuantity, item.maxQuantity || 99) }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  // Apply coupon
  const applyCoupon = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (couponCode.toUpperCase() === 'FRESH10') {
        setDiscount(subtotal * 0.1);
        setCouponApplied(true);
      } else if (couponCode.toUpperCase() === 'ORGANIC20') {
        setDiscount(subtotal * 0.2);
        setCouponApplied(true);
      } else {
        alert('Invalid coupon code. Try FRESH10 or ORGANIC20');
      }
      setIsLoading(false);
    }, 800);
  };

  // Remove coupon
  const removeCoupon = () => {
    setDiscount(0);
    setCouponApplied(false);
    setCouponCode('');
  };

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-12 text-center"
        >
          <div className="text-8xl mb-6">🛒</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
          <Link to="/products" className="btn-primary inline-flex items-center gap-2">
            <FiArrowLeft /> Start Shopping
          </Link>
          <div className="mt-8 flex justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">🌱 Fresh Organic</span>
            <span className="flex items-center gap-1">🚚 Free Delivery</span>
            <span className="flex items-center gap-1">💯 Quality Guaranteed</span>
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
        className="flex items-center justify-between mb-8"
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center gap-3">
            <FiShoppingCart className="text-emerald-500" />
            Shopping Cart
          </h1>
          <p className="text-gray-600 mt-1">{cartItems.length} items in your cart</p>
        </div>
        <Link to="/products" className="btn-ghost flex items-center gap-2 text-sm">
          <FiArrowLeft /> Continue Shopping
        </Link>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items - Left Column */}
        <div className="lg:col-span-2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-6"
          >
            <div className="hidden md:grid grid-cols-12 gap-4 text-sm font-medium text-gray-500 pb-3 border-b border-white/30 mb-4">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            <AnimatePresence>
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 }}
                  className="grid grid-cols-12 gap-4 items-center py-4 border-b border-white/20 last:border-0"
                >
                  {/* Product Info */}
                  <div className="col-span-12 md:col-span-6 flex items-center gap-4">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white/40 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      {!item.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">Out of Stock</span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link to={`/product/${item.id}`} className="font-semibold text-gray-800 hover:text-emerald-600 transition">
                        {item.name}
                      </Link>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-500">{item.category}</span>
                        {item.organic && (
                          <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                            🌱 Organic
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="col-span-4 md:col-span-2 text-center">
                    <span className="font-medium text-gray-700">${item.price.toFixed(2)}</span>
                  </div>

                  {/* Quantity */}
                  <div className="col-span-4 md:col-span-2 flex items-center justify-center">
                    <div className="flex items-center gap-1 bg-white/40 backdrop-blur-sm rounded-full p-1">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1 || !item.inStock}
                        className="p-1 rounded-full hover:bg-white/60 transition disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <FiMinus size={16} />
                      </button>
                      <span className="w-8 text-center font-medium text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        disabled={item.quantity >= (item.maxQuantity || 99) || !item.inStock}
                        className="p-1 rounded-full hover:bg-white/60 transition disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <FiPlus size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Total & Actions */}
                  <div className="col-span-4 md:col-span-2 flex items-center justify-end gap-3">
                    <span className="font-bold text-emerald-600">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="p-2 rounded-full hover:bg-red-50 text-gray-400 hover:text-red-500 transition"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Cart Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t border-white/30">
              <div className="flex gap-3">
                <button className="btn-ghost text-sm flex items-center gap-2">
                  <FiHeart /> Move to Wishlist
                </button>
                <button className="btn-ghost text-sm flex items-center gap-2" onClick={() => setCartItems([])}>
                  <FiTrash2 /> Clear Cart
                </button>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <FiTruck className="text-emerald-500" />
                {subtotal > 50 ? 'Free Shipping Applied' : `Add $${(50 - subtotal).toFixed(2)} more for free shipping`}
              </div>
            </div>
          </motion.div>

          {/* Recommended Products */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FiGift className="text-emerald-500" /> You might also like
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="glass-card p-3 text-center hover:scale-105 transition">
                  <div className="aspect-square rounded-xl bg-white/40 mb-2 flex items-center justify-center text-4xl">
                    {['🍎', '🥑', '🍇', '🥬'][i-1]}
                  </div>
                  <p className="text-sm font-medium">Organic Item {i}</p>
                  <p className="text-xs text-gray-500">${(2.99 + i).toFixed(2)}</p>
                  <button className="btn-primary text-xs py-1 px-3 mt-2">Add +</button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Order Summary - Right Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-1"
        >
          <div className="glass-card p-6 sticky top-28">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h3>

            {/* Coupon Section */}
            <div className="mb-6 p-4 bg-white/30 backdrop-blur-sm rounded-xl">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Coupon code" 
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  disabled={couponApplied}
                  className="flex-1 glass-input text-sm py-2 px-3"
                />
                <button 
                  onClick={couponApplied ? removeCoupon : applyCoupon}
                  disabled={isLoading || !couponCode}
                  className="btn-primary text-sm py-2 px-4 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? '...' : couponApplied ? 'Remove' : 'Apply'}
                </button>
              </div>
              {couponApplied && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-emerald-600 flex items-center gap-1"
                >
                  <FiTag /> Coupon applied! You saved ${discount.toFixed(2)}
                </motion.div>
              )}
              <div className="mt-2 text-xs text-gray-500 flex flex-wrap gap-2">
                <span>Available: FRESH10 (10%)</span>
                <span>ORGANIC20 (20%)</span>
              </div>
            </div>

            {/* Totals */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 flex items-center gap-1">
                  <FiTruck /> Shipping
                </span>
                <span className="font-medium">
                  {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (8%)</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-600">
                  <span>Discount</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="border-t border-white/30 pt-3 mt-3">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-emerald-600">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <Link to="/checkout">
              <button className="btn-primary w-full mt-6 flex items-center justify-center gap-2 text-base">
                Proceed to Checkout <FiArrowRight />
              </button>
            </Link>

            {/* Trust Badges */}
            <div className="mt-6 space-y-2 text-xs text-gray-500">
              <div className="flex items-center gap-2 justify-center">
                <FiShield className="text-emerald-500" />
                <span>Secure Checkout</span>
              </div>
              <div className="flex justify-center gap-4">
                <span>💳 Credit Card</span>
                <span>🔄 PayPal</span>
                <span>📱 Apple Pay</span>
                <span>💰 Cash on Delivery</span>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="mt-4 p-4 bg-emerald-50/50 backdrop-blur-sm rounded-xl text-xs text-gray-600">
              <div className="flex items-center gap-2 mb-1">
                <FiTruck className="text-emerald-500" />
                <span className="font-medium">Delivery Information</span>
              </div>
              <p>• Free delivery on orders over $50</p>
              <p>• Estimated delivery: 2-4 business days</p>
              <p>• 100% satisfaction guarantee</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}