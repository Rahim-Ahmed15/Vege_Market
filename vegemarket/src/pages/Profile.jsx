import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiShoppingBag,
  FiHeart,
  FiSettings,
  FiLogOut,
  FiEdit2,
  FiPlus,
  FiTrash2,
  FiStar,
  FiTruck,
  FiClock,
  FiCheckCircle,
  FiXCircle,
  FiPackage,
  FiCreditCard,
  FiShield,
  FiAlertCircle,
  FiUpload,
  FiCamera,
  FiSave,
  FiArrowRight,
  FiDollarSign,
  FiPercent,
  FiGift
} from 'react-icons/fi';

export default function Profile() {
  // User data - in a real app, this would come from authentication state
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    joinDate: 'January 2024',
    totalOrders: 47,
    totalSpent: 1247.89,
    loyaltyPoints: 1250
  });

  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...user });
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showAddressForm, setShowAddressForm] = useState(false);

  // Sample orders data
  const orders = [
    {
      id: 'ORD-2024-001',
      date: '2024-12-15',
      total: 89.97,
      status: 'delivered',
      items: 5,
      tracking: 'TRK-12345',
      payment: 'Credit Card'
    },
    {
      id: 'ORD-2024-002',
      date: '2024-12-10',
      total: 45.50,
      status: 'shipped',
      items: 3,
      tracking: 'TRK-67890',
      payment: 'PayPal'
    },
    {
      id: 'ORD-2024-003',
      date: '2024-12-05',
      total: 120.25,
      status: 'processing',
      items: 7,
      tracking: 'TRK-24680',
      payment: 'Cash on Delivery'
    },
    {
      id: 'ORD-2024-004',
      date: '2024-11-28',
      total: 34.99,
      status: 'delivered',
      items: 2,
      tracking: 'TRK-13579',
      payment: 'Credit Card'
    }
  ];

  // Sample addresses
  const addresses = [
    {
      id: 1,
      name: 'Home',
      street: '123 Organic Street',
      city: 'Green Valley',
      state: 'CA',
      zip: '12345',
      country: 'USA',
      isDefault: true,
      phone: '+1 (555) 123-4567'
    },
    {
      id: 2,
      name: 'Office',
      street: '456 Business Avenue',
      city: 'Metropolis',
      state: 'NY',
      zip: '67890',
      country: 'USA',
      isDefault: false,
      phone: '+1 (555) 987-6543'
    }
  ];

  // Sample wishlist items (simplified)
  const wishlistItems = [
    { id: 1, name: 'Organic Avocados', price: 3.99, image: '🥑' },
    { id: 2, name: 'Fresh Strawberries', price: 5.49, image: '🍓' },
    { id: 3, name: 'Organic Quinoa', price: 8.99, image: '🍚' }
  ];

  // Sample recent views
  const recentViews = [
    { id: 1, name: 'Organic Apples', price: 4.99, image: '🍎' },
    { id: 2, name: 'Fresh Spinach', price: 3.49, image: '🥬' },
    { id: 3, name: 'Artisan Bread', price: 6.99, image: '🍞' },
    { id: 4, name: 'Organic Milk', price: 5.99, image: '🥛' }
  ];

  const getStatusColor = (status) => {
    const colors = {
      delivered: 'bg-emerald-100 text-emerald-700',
      shipped: 'bg-blue-100 text-blue-700',
      processing: 'bg-amber-100 text-amber-700',
      cancelled: 'bg-rose-100 text-rose-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const getStatusIcon = (status) => {
    const icons = {
      delivered: <FiCheckCircle />,
      shipped: <FiTruck />,
      processing: <FiClock />,
      cancelled: <FiXCircle />
    };
    return icons[status] || <FiPackage />;
  };

  const handleSaveProfile = () => {
    setUser(editData);
    setIsEditing(false);
  };

  const handleLogout = () => {
    // In a real app, this would handle logout
    alert('Logging out...');
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FiUser /> },
    { id: 'orders', label: 'Orders', icon: <FiShoppingBag /> },
    { id: 'addresses', label: 'Addresses', icon: <FiMapPin /> },
    { id: 'wishlist', label: 'Wishlist', icon: <FiHeart /> },
    { id: 'settings', label: 'Settings', icon: <FiSettings /> }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      {/* Profile Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6 md:p-8 mb-8 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 text-9xl opacity-5 select-none">👤</div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
          <div className="relative group">
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="w-24 h-24 rounded-full object-cover border-4 border-emerald-200 group-hover:border-emerald-500 transition"
            />
            <button className="absolute bottom-0 right-0 p-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition shadow-lg">
              <FiCamera size={14} />
            </button>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-4">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{user.name}</h1>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full flex items-center gap-1">
                <FiStar className="fill-emerald-500" /> Loyalty Member
              </span>
            </div>
            <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
              <span className="flex items-center gap-1"><FiMail /> {user.email}</span>
              <span className="flex items-center gap-1"><FiPhone /> {user.phone}</span>
              <span className="flex items-center gap-1"><FiClock /> Joined {user.joinDate}</span>
            </div>
          </div>
          <button onClick={handleLogout} className="btn-ghost text-sm flex items-center gap-2 text-rose-500 hover:text-rose-600">
            <FiLogOut /> Logout
          </button>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
      >
        <div className="glass-card p-4 text-center">
          <div className="text-2xl font-bold text-emerald-600">{user.totalOrders}</div>
          <div className="text-sm text-gray-600 flex items-center justify-center gap-1"><FiShoppingBag /> Total Orders</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-2xl font-bold text-emerald-600">${user.totalSpent.toFixed(2)}</div>
          <div className="text-sm text-gray-600 flex items-center justify-center gap-1"><FiDollarSign /> Total Spent</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-2xl font-bold text-emerald-600">{user.loyaltyPoints}</div>
          <div className="text-sm text-gray-600 flex items-center justify-center gap-1"><FiStar /> Loyalty Points</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-2xl font-bold text-emerald-600">{orders.filter(o => o.status === 'delivered').length}</div>
          <div className="text-sm text-gray-600 flex items-center justify-center gap-1"><FiCheckCircle /> Delivered</div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition flex items-center gap-2 ${
              activeTab === tab.id 
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20' 
                : 'glass hover:bg-white/60'
            }`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Profile Info */}
              <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <FiUser /> Personal Information
                  </h3>
                  <button 
                    onClick={() => setIsEditing(!isEditing)}
                    className="btn-ghost text-sm flex items-center gap-2"
                  >
                    <FiEdit2 /> {isEditing ? 'Cancel' : 'Edit'}
                  </button>
                </div>
                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        value={editData.name} 
                        onChange={(e) => setEditData({...editData, name: e.target.value})}
                        className="glass-input w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        value={editData.email} 
                        onChange={(e) => setEditData({...editData, email: e.target.value})}
                        className="glass-input w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input 
                        type="tel" 
                        value={editData.phone} 
                        onChange={(e) => setEditData({...editData, phone: e.target.value})}
                        className="glass-input w-full"
                      />
                    </div>
                    <button onClick={handleSaveProfile} className="btn-primary flex items-center gap-2">
                      <FiSave /> Save Changes
                    </button>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-white/30 rounded-xl">
                      <FiUser className="text-emerald-500" />
                      <div>
                        <div className="text-xs text-gray-500">Full Name</div>
                        <div className="font-medium">{user.name}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/30 rounded-xl">
                      <FiMail className="text-emerald-500" />
                      <div>
                        <div className="text-xs text-gray-500">Email</div>
                        <div className="font-medium">{user.email}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/30 rounded-xl">
                      <FiPhone className="text-emerald-500" />
                      <div>
                        <div className="text-xs text-gray-500">Phone</div>
                        <div className="font-medium">{user.phone}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/30 rounded-xl">
                      <FiClock className="text-emerald-500" />
                      <div>
                        <div className="text-xs text-gray-500">Member Since</div>
                        <div className="font-medium">{user.joinDate}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Recent Orders Preview */}
              <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <FiShoppingBag /> Recent Orders
                  </h3>
                  <button onClick={() => setActiveTab('orders')} className="text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                    View All <FiArrowRight />
                  </button>
                </div>
                <div className="space-y-3">
                  {orders.slice(0, 3).map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-3 bg-white/30 rounded-xl">
                      <div>
                        <div className="font-medium text-sm">{order.id}</div>
                        <div className="text-xs text-gray-500">{order.date}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-xs px-3 py-1 rounded-full flex items-center gap-1 ${getStatusColor(order.status)}`}>
                          {getStatusIcon(order.status)} {order.status}
                        </span>
                        <span className="font-bold text-emerald-600">${order.total.toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FiShoppingBag /> Order History
              </h3>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="p-4 bg-white/30 rounded-xl hover:bg-white/40 transition">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="font-semibold text-gray-800">{order.id}</div>
                        <div className="text-sm text-gray-500">{order.date}</div>
                        <div className="text-sm text-gray-500">{order.items} items • {order.payment}</div>
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`text-xs px-3 py-1 rounded-full flex items-center gap-1 ${getStatusColor(order.status)}`}>
                          {getStatusIcon(order.status)} {order.status}
                        </span>
                        <span className="font-bold text-emerald-600">${order.total.toFixed(2)}</span>
                        <button className="btn-ghost text-xs py-1 px-3">View Details</button>
                      </div>
                    </div>
                    {order.tracking && (
                      <div className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                        <FiTruck /> Tracking: {order.tracking}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Addresses Tab */}
          {activeTab === 'addresses' && (
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <FiMapPin /> Saved Addresses
                </h3>
                <button onClick={() => setShowAddressForm(!showAddressForm)} className="btn-primary text-sm py-2 px-4 flex items-center gap-2">
                  <FiPlus /> Add Address
                </button>
              </div>
              <div className="space-y-4">
                {addresses.map((address) => (
                  <div key={address.id} className="p-4 bg-white/30 rounded-xl relative">
                    {address.isDefault && (
                      <span className="absolute top-2 right-2 text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full flex items-center gap-1">
                        <FiCheckCircle size={12} /> Default
                      </span>
                    )}
                    <div className="font-semibold text-gray-800">{address.name}</div>
                    <div className="text-sm text-gray-600">{address.street}</div>
                    <div className="text-sm text-gray-600">{address.city}, {address.state} {address.zip}</div>
                    <div className="text-sm text-gray-600">{address.country}</div>
                    <div className="text-sm text-gray-600 flex items-center gap-1"><FiPhone /> {address.phone}</div>
                    <div className="flex gap-2 mt-3">
                      <button className="btn-ghost text-xs py-1 px-3 flex items-center gap-1"><FiEdit2 /> Edit</button>
                      <button className="btn-ghost text-xs py-1 px-3 text-rose-500 flex items-center gap-1"><FiTrash2 /> Remove</button>
                      {!address.isDefault && <button className="btn-ghost text-xs py-1 px-3 flex items-center gap-1">Set as Default</button>}
                    </div>
                  </div>
                ))}
                {showAddressForm && (
                  <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-200">
                    <h4 className="font-semibold text-gray-800 mb-3">Add New Address</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <input className="glass-input" placeholder="Address Name (e.g., Home)" />
                      <input className="glass-input" placeholder="Street Address" />
                      <input className="glass-input" placeholder="City" />
                      <input className="glass-input" placeholder="State" />
                      <input className="glass-input" placeholder="ZIP Code" />
                      <input className="glass-input" placeholder="Phone Number" />
                    </div>
                    <div className="flex gap-3 mt-3">
                      <button className="btn-primary text-sm py-2 px-4">Save Address</button>
                      <button onClick={() => setShowAddressForm(false)} className="btn-ghost text-sm py-2 px-4">Cancel</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Wishlist Tab */}
          {activeTab === 'wishlist' && (
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <FiHeart /> Wishlist Items
                </h3>
                <Link to="/wishlist" className="text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                  View Full Wishlist <FiArrowRight />
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="p-4 bg-white/30 rounded-xl text-center">
                    <div className="text-4xl mb-2">{item.image}</div>
                    <div className="font-medium text-sm">{item.name}</div>
                    <div className="text-emerald-600 font-bold text-sm">${item.price.toFixed(2)}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <FiSettings /> Account Settings
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white/30 rounded-xl">
                    <div>
                      <div className="font-medium">Email Notifications</div>
                      <div className="text-sm text-gray-500">Receive order updates and promotions</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/30 rounded-xl">
                    <div>
                      <div className="font-medium">Two-Factor Authentication</div>
                      <div className="text-sm text-gray-500">Add extra security to your account</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/30 rounded-xl">
                    <div>
                      <div className="font-medium">Language Preference</div>
                      <div className="text-sm text-gray-500">Choose your preferred language</div>
                    </div>
                    <select className="glass-input text-sm py-1 px-3">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="glass-card p-6 border border-rose-200">
                <h3 className="text-lg font-semibold text-rose-600 mb-4 flex items-center gap-2">
                  <FiAlertCircle /> Danger Zone
                </h3>
                <div className="flex flex-wrap gap-3">
                  <button className="btn-ghost text-rose-500 border-rose-200 hover:bg-rose-50 text-sm py-2 px-4">
                    Change Password
                  </button>
                  <button className="btn-ghost text-rose-500 border-rose-200 hover:bg-rose-50 text-sm py-2 px-4">
                    Deactivate Account
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}