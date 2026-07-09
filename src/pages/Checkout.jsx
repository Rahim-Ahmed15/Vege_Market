import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiMapPin,
  FiCreditCard,
  FiDollarSign,
  FiTruck,
  FiShield,
  FiCheckCircle,
  FiArrowLeft,
  FiArrowRight,
  FiUser,
  FiPhone,
  FiMail,
  FiHome,
  FiBriefcase,
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiLock,
  FiClock,
  FiPackage,
  FiShoppingBag,
  FiChevronDown,
  FiChevronUp
} from 'react-icons/fi';

export default function Checkout() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  // Form states
  const [shippingInfo, setShippingInfo] = useState({
    fullName: 'John Doe',
    email: 'john@email.com',
    phone: '+1 (555) 123-4567',
    address: '123 Organic Street',
    apartment: 'Apt 4B',
    city: 'Green Valley',
    state: 'CA',
    zipCode: '12345',
    country: 'USA',
    deliveryInstructions: 'Leave at front door'
  });

  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: ''
  });

  // Sample saved addresses
  const savedAddresses = [
    {
      id: 1,
      label: 'Home',
      address: '123 Organic Street, Apt 4B',
      city: 'Green Valley',
      state: 'CA',
      zip: '12345',
      isDefault: true
    },
    {
      id: 2,
      label: 'Office',
      address: '456 Business Avenue',
      city: 'Metropolis',
      state: 'NY',
      zip: '67890',
      isDefault: false
    }
  ];

  // Sample cart items
  const cartItems = [
    {
      id: 1,
      name: 'Organic Apples',
      price: 4.99,
      quantity: 2,
      image: '🍎',
      organic: true
    },
    {
      id: 2,
      name: 'Fresh Spinach',
      price: 3.49,
      quantity: 1,
      image: '🥬',
      organic: true
    },
    {
      id: 3,
      name: 'Organic Milk',
      price: 5.99,
      quantity: 3,
      image: '🥛',
      organic: true
    }
  ];

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const discount = 0;
  const total = subtotal + shipping + tax - discount;

  const handleShippingChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handleCardChange = (e) => {
    setCardInfo({ ...cardInfo, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/order-success');
    }, 2000);
  };

  const steps = [
    { id: 1, label: 'Shipping', icon: <FiMapPin /> },
    { id: 2, label: 'Payment', icon: <FiCreditCard /> },
    { id: 3, label: 'Confirm', icon: <FiCheckCircle /> }
  ];

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
            <FiShoppingBag className="text-emerald-500" />
            Checkout
          </h1>
          <p className="text-gray-600 mt-1">Complete your order in 3 easy steps</p>
        </div>
        <Link to="/cart" className="btn-ghost flex items-center gap-2 text-sm">
          <FiArrowLeft /> Back to Cart
        </Link>
      </motion.div>

      {/* Progress Steps */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center justify-center gap-2 md:gap-4 mb-8"
      >
        {steps.map((s, index) => (
          <div key={s.id} className="flex items-center">
            <button
              onClick={() => setStep(s.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
                step >= s.id 
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20' 
                  : 'glass hover:bg-white/60'
              }`}
            >
              <span className="text-sm md:text-base">{s.icon}</span>
              <span className="text-xs md:text-sm font-medium hidden sm:inline">{s.label}</span>
            </button>
            {index < steps.length - 1 && (
              <div className={`w-8 md:w-12 h-0.5 ${step > s.id ? 'bg-emerald-600' : 'bg-gray-200'}`} />
            )}
          </div>
        ))}
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {/* Step 1: Shipping */}
            {step === 1 && (
              <motion.div
                key="shipping"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <FiMapPin className="text-emerald-500" />
                  Shipping Address
                </h3>

                {/* Saved Addresses */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Saved Address
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {savedAddresses.map((addr) => (
                      <div
                        key={addr.id}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition ${
                          addr.isDefault 
                            ? 'border-emerald-500 bg-emerald-50/50' 
                            : 'border-gray-200 hover:border-emerald-300'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="font-medium flex items-center gap-2">
                              {addr.label === 'Home' ? <FiHome /> : <FiBriefcase />}
                              {addr.label}
                            </div>
                            <div className="text-sm text-gray-600 mt-1">{addr.address}</div>
                            <div className="text-sm text-gray-600">
                              {addr.city}, {addr.state} {addr.zip}
                            </div>
                          </div>
                          {addr.isDefault && (
                            <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                              Default
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                    <div className="p-4 rounded-xl border-2 border-dashed border-gray-300 hover:border-emerald-400 cursor-pointer transition flex items-center justify-center">
                      <button className="flex items-center gap-2 text-emerald-600">
                        <FiPlus /> Add New Address
                      </button>
                    </div>
                  </div>
                </div>

                {/* Shipping Form */}
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={shippingInfo.fullName}
                        onChange={handleShippingChange}
                        className="glass-input w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={shippingInfo.email}
                        onChange={handleShippingChange}
                        className="glass-input w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={shippingInfo.phone}
                      onChange={handleShippingChange}
                      className="glass-input w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Street Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={shippingInfo.address}
                      onChange={handleShippingChange}
                      className="glass-input w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Apartment, Suite, etc. (Optional)
                    </label>
                    <input
                      type="text"
                      name="apartment"
                      value={shippingInfo.apartment}
                      onChange={handleShippingChange}
                      className="glass-input w-full"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={shippingInfo.city}
                        onChange={handleShippingChange}
                        className="glass-input w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={shippingInfo.state}
                        onChange={handleShippingChange}
                        className="glass-input w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={shippingInfo.zipCode}
                        onChange={handleShippingChange}
                        className="glass-input w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Delivery Instructions (Optional)
                    </label>
                    <textarea
                      name="deliveryInstructions"
                      value={shippingInfo.deliveryInstructions}
                      onChange={handleShippingChange}
                      rows="2"
                      className="glass-input w-full resize-none"
                    />
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    Continue to Payment <FiArrowRight />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <motion.div
                key="payment"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <FiCreditCard className="text-emerald-500" />
                  Payment Method
                </h3>

                <div className="space-y-4">
                  {/* Payment Options */}
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Payment Method
                    </label>

                    {/* Cash on Delivery */}
                    <div
                      onClick={() => setPaymentMethod('cod')}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition ${
                        paymentMethod === 'cod'
                          ? 'border-emerald-500 bg-emerald-50/50'
                          : 'border-gray-200 hover:border-emerald-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          checked={paymentMethod === 'cod'}
                          onChange={() => setPaymentMethod('cod')}
                          className="w-4 h-4 text-emerald-600"
                        />
                        <div className="flex-1">
                          <div className="font-medium flex items-center gap-2">
                            <FiDollarSign className="text-emerald-500" />
                            Cash on Delivery
                          </div>
                          <div className="text-sm text-gray-500">
                            Pay when you receive your order
                          </div>
                        </div>
                        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                          Popular
                        </span>
                      </div>
                    </div>

                    {/* Credit Card */}
                    <div
                      onClick={() => setPaymentMethod('card')}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition ${
                        paymentMethod === 'card'
                          ? 'border-emerald-500 bg-emerald-50/50'
                          : 'border-gray-200 hover:border-emerald-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          checked={paymentMethod === 'card'}
                          onChange={() => setPaymentMethod('card')}
                          className="w-4 h-4 text-emerald-600"
                        />
                        <div className="flex-1">
                          <div className="font-medium flex items-center gap-2">
                            <FiCreditCard className="text-emerald-500" />
                            Credit / Debit Card
                          </div>
                          <div className="text-sm text-gray-500">
                            Pay securely with your card
                          </div>
                        </div>
                        <div className="flex gap-1 text-xl">
                          <span>💳</span>
                          <span>💳</span>
                          <span>💳</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Credit Card Form */}
                  {paymentMethod === 'card' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 bg-white/30 rounded-xl space-y-4"
                    >
                      <div className="flex items-center gap-2 text-sm text-emerald-600">
                        <FiLock /> Secure Payment
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Card Number
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={cardInfo.cardNumber}
                          onChange={handleCardChange}
                          className="glass-input w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Name on Card
                        </label>
                        <input
                          type="text"
                          name="cardName"
                          placeholder="John Doe"
                          value={cardInfo.cardName}
                          onChange={handleCardChange}
                          className="glass-input w-full"
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            name="expiry"
                            placeholder="MM/YY"
                            value={cardInfo.expiry}
                            onChange={handleCardChange}
                            className="glass-input w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            CVV
                          </label>
                          <input
                            type="password"
                            name="cvv"
                            placeholder="***"
                            maxLength="4"
                            value={cardInfo.cvv}
                            onChange={handleCardChange}
                            className="glass-input w-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={() => setStep(1)}
                      className="btn-ghost flex items-center gap-2"
                    >
                      <FiArrowLeft /> Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="btn-primary flex-1 flex items-center justify-center gap-2"
                    >
                      Review Order <FiArrowRight />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Confirm */}
            {step === 3 && (
              <motion.div
                key="confirm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <FiCheckCircle className="text-emerald-500" />
                  Confirm Order
                </h3>

                {/* Order Summary */}
                <div className="space-y-6">
                  {/* Shipping Details */}
                  <div className="p-4 bg-white/30 rounded-xl">
                    <h4 className="font-semibold text-gray-800 flex items-center gap-2 mb-2">
                      <FiTruck /> Shipping Details
                    </h4>
                    <div className="text-sm text-gray-600">
                      <p>{shippingInfo.fullName}</p>
                      <p>{shippingInfo.email}</p>
                      <p>{shippingInfo.phone}</p>
                      <p>{shippingInfo.address}</p>
                      {shippingInfo.apartment && <p>{shippingInfo.apartment}</p>}
                      <p>{shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}</p>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="p-4 bg-white/30 rounded-xl">
                    <h4 className="font-semibold text-gray-800 flex items-center gap-2 mb-2">
                      <FiCreditCard /> Payment Method
                    </h4>
                    <div className="text-sm text-gray-600">
                      {paymentMethod === 'cod' ? (
                        <span>💰 Cash on Delivery</span>
                      ) : (
                        <span>💳 Credit Card ending in {cardInfo.cardNumber.slice(-4) || '1234'}</span>
                      )}
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="p-4 bg-white/30 rounded-xl">
                    <h4 className="font-semibold text-gray-800 flex items-center gap-2 mb-3">
                      <FiPackage /> Order Items ({cartItems.length})
                    </h4>
                    <div className="space-y-2">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{item.image}</span>
                            <span>
                              {item.name} × {item.quantity}
                              {item.organic && (
                                <span className="text-xs bg-emerald-100 text-emerald-700 ml-2 px-1.5 py-0.5 rounded-full">
                                  Organic
                                </span>
                              )}
                            </span>
                          </div>
                          <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Order Total */}
                  <div className="p-4 bg-emerald-50/50 rounded-xl">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shipping</span>
                        <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tax (8%)</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between text-emerald-600">
                          <span>Discount</span>
                          <span>-${discount.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="border-t border-white/30 pt-2 mt-2">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total</span>
                          <span className="text-emerald-600">${total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(2)}
                      className="btn-ghost flex items-center gap-2"
                    >
                      <FiArrowLeft /> Back
                    </button>
                    <button
                      onClick={handlePlaceOrder}
                      disabled={isProcessing}
                      className="btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isProcessing ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          Place Order <FiCheckCircle />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sidebar - Order Summary */}
        <div className="lg:col-span-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 sticky top-28"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h3>

            {/* Items */}
            <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-3 text-sm">
                  <span className="text-2xl">{item.image}</span>
                  <div className="flex-1">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs text-gray-500">× {item.quantity}</div>
                  </div>
                  <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-white/30 my-4"></div>

            {/* Totals */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 flex items-center gap-1">
                  <FiTruck /> Shipping
                </span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
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

            {/* Trust Badges */}
            <div className="mt-6 pt-4 border-t border-white/30">
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <FiLock className="text-emerald-500" /> Secure
                </span>
                <span className="flex items-center gap-1">
                  <FiShield className="text-emerald-500" /> Guaranteed
                </span>
                <span className="flex items-center gap-1">
                  <FiClock className="text-emerald-500" /> 24/7 Support
                </span>
              </div>
              <div className="flex justify-center gap-2 mt-3 text-xl">
                <span>💳</span>
                <span>🔄</span>
                <span>📱</span>
                <span>💰</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}