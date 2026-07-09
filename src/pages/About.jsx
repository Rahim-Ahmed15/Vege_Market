import { motion } from 'framer-motion';
import { FiDroplet, FiTarget, FiEye, FiHeart, FiUsers, FiTruck, FiShield, FiAward } from 'react-icons/fi';

export default function About() {
  const team = [
    { name: 'Sarah Ahmed', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
    { name: 'Michael Chen', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
    { name: 'Emma Wilson', role: 'Chief Marketing Officer', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop' },
    { name: 'David Kim', role: 'Head of Supply Chain', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop' },
  ];

  const values = [
    { icon: <FiDroplet />, title: '100% Organic', desc: 'Certified organic produce from sustainable farms' },
    { icon: <FiTruck />, title: 'Farm to Table', desc: 'Direct delivery within 24 hours of harvest' },
    { icon: <FiShield />, title: 'Quality Guaranteed', desc: 'Rigorous quality checks at every step' },
    { icon: <FiAward />, title: 'Award Winning', desc: 'Best Organic Grocery Store 2024' },
  ];

  const stats = [
    { number: '50+', label: 'Farm Partners' },
    { number: '1000+', label: 'Happy Customers' },
    { number: '500+', label: 'Organic Products' },
    { number: '99%', label: 'Satisfaction Rate' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 md:p-16 text-center relative overflow-hidden floating-bg"
      >
        <div className="absolute top-0 right-0 text-8xl opacity-10 select-none">🌿</div>
        <div className="absolute bottom-0 left-0 text-8xl opacity-10 select-none">🥬</div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 relative z-10">
          About <span className="text-emerald-600">VegeMarket</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto relative z-10">
          We're on a mission to make healthy, organic food accessible to everyone. 
          From farm to your table, we ensure freshness and quality.
        </p>
        <div className="flex gap-4 justify-center mt-6 relative z-10">
          <button className="btn-primary">Our Story ↓</button>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
      >
        {stats.map((stat, index) => (
          <div key={index} className="glass-card p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-emerald-600">{stat.number}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Our Story */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid md:grid-cols-2 gap-8 mt-12"
      >
        <div className="glass-card p-8">
          <div className="flex items-center gap-3 mb-4">
            <FiHeart className="text-emerald-500 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">Our Story</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Founded in 2020, VegeMarket started with a simple idea: everyone deserves access to fresh, 
            organic, and affordable groceries. What began as a small local farmers' market has grown 
            into a trusted online platform connecting hundreds of local farmers with health-conscious 
            consumers.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            We work directly with organic farmers who share our passion for sustainable agriculture. 
            Every product on our platform is carefully selected, ensuring you get the best nature has 
            to offer.
          </p>
        </div>
        <div className="glass-card p-8">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=400&fit=crop" 
            alt="Farm fresh produce" 
            className="rounded-2xl w-full h-48 object-cover"
          />
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="bg-emerald-50/50 p-3 rounded-xl text-center">
              <div className="text-2xl">🌱</div>
              <div className="text-xs font-medium mt-1">Sustainable</div>
            </div>
            <div className="bg-emerald-50/50 p-3 rounded-xl text-center">
              <div className="text-2xl">🤝</div>
              <div className="text-xs font-medium mt-1">Fair Trade</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mission & Vision */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="grid md:grid-cols-2 gap-6 mt-12"
      >
        <div className="glass-card p-8 border-l-4 border-emerald-500">
          <div className="flex items-center gap-3 mb-4">
            <FiTarget className="text-emerald-500 text-2xl" />
            <h3 className="text-xl font-bold text-gray-800">Our Mission</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            To revolutionize the way people access fresh, organic food by creating a seamless 
            connection between local farmers and conscious consumers, while promoting sustainable 
            agriculture practices.
          </p>
        </div>
        <div className="glass-card p-8 border-l-4 border-emerald-500">
          <div className="flex items-center gap-3 mb-4">
            <FiEye className="text-emerald-500 text-2xl" />
            <h3 className="text-xl font-bold text-gray-800">Our Vision</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            A world where healthy, organic food is accessible to everyone, where local farmers 
            thrive, and where every meal contributes to a healthier planet.
          </p>
        </div>
      </motion.div>

      {/* Our Values */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Core Values</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {values.map((value, index) => (
            <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform">
              <div className="text-3xl text-emerald-500 mb-3">{value.icon}</div>
              <h4 className="font-semibold text-gray-800">{value.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{value.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-12"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {team.map((member, index) => (
            <div key={index} className="glass-card p-6 text-center group hover:scale-105 transition-transform">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-emerald-200 group-hover:border-emerald-500 transition-colors"
              />
              <h4 className="font-semibold text-gray-800 mt-3">{member.name}</h4>
              <p className="text-sm text-emerald-600">{member.role}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mt-12 glass-card p-8 md:p-12 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-transparent"></div>
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Join Our Organic Community</h3>
          <p className="text-gray-600 mt-3 max-w-md mx-auto">
            Be part of the organic revolution. Get fresh, healthy food delivered to your doorstep.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <button className="btn-primary">Shop Now →</button>
            <button className="btn-ghost">Learn More</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}