import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiClock, 
  FiSend, 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiYoutube,
  FiCheckCircle,
  FiMessageCircle,
  FiGlobe
} from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FiMapPin className="text-emerald-500 text-2xl" />,
      title: 'Visit Us',
      details: ['123 Organic Street,', 'Green Valley, GV 12345', 'United States']
    },
    {
      icon: <FiPhone className="text-emerald-500 text-2xl" />,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543', 'Mon-Fri: 9AM - 6PM']
    },
    {
      icon: <FiMail className="text-emerald-500 text-2xl" />,
      title: 'Email Us',
      details: ['hello@vegemarket.com', 'support@vegemarket.com', 'We reply within 24 hours']
    },
    {
      icon: <FiClock className="text-emerald-500 text-2xl" />,
      title: 'Business Hours',
      details: ['Monday - Friday: 9AM - 8PM', 'Saturday: 10AM - 6PM', 'Sunday: Closed']
    }
  ];

  const socialLinks = [
    { icon: <FiFacebook />, name: 'Facebook', color: 'hover:bg-blue-500' },
    { icon: <FiTwitter />, name: 'Twitter', color: 'hover:bg-sky-400' },
    { icon: <FiInstagram />, name: 'Instagram', color: 'hover:bg-pink-500' },
    { icon: <FiYoutube />, name: 'YouTube', color: 'hover:bg-red-500' },
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
        <div className="absolute top-0 left-0 text-8xl opacity-5 select-none">📬</div>
        <div className="absolute bottom-0 right-0 text-8xl opacity-5 select-none">✉️</div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 relative z-10">
          Get In <span className="text-emerald-600">Touch</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto relative z-10">
          Have questions, feedback, or just want to say hello? We'd love to hear from you. 
          Reach out to us anytime.
        </p>
        <div className="flex gap-4 justify-center mt-6 relative z-10">
          <button className="btn-primary" onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}>
            Send Message ↓
          </button>
        </div>
      </motion.div>

      {/* Contact Info Cards */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
      >
        {contactInfo.map((info, index) => (
          <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform group">
            <div className="inline-block p-3 rounded-full bg-emerald-50 group-hover:bg-emerald-100 transition-colors">
              {info.icon}
            </div>
            <h4 className="font-semibold text-gray-800 mt-3">{info.title}</h4>
            <div className="text-sm text-gray-600 mt-2 space-y-1">
              {info.details.map((detail, idx) => (
                <p key={idx}>{detail}</p>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Map & Form Section */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {/* Google Map */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-4 overflow-hidden"
        >
          <div className="aspect-video rounded-2xl overflow-hidden bg-white/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb7aef5%3A0xd4f8c9f7f8c8f9e8!2sOrganic%20Food%20Market!5e0!3m2!1sen!2sus!4v1644262070686!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="VegeMarket Location"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="flex items-center justify-between mt-4 px-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FiMapPin className="text-emerald-500" />
              <span>123 Organic Street, Green Valley</span>
            </div>
            <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
              Get Directions →
            </button>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card p-8"
          id="contact-form"
        >
          <div className="flex items-center gap-3 mb-6">
            <FiMessageCircle className="text-emerald-500 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">Send a Message</h2>
          </div>

          {isSubmitted && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-4 bg-emerald-50/80 backdrop-blur-sm rounded-xl border border-emerald-200 flex items-center gap-3 text-emerald-700"
            >
              <FiCheckCircle className="text-xl" />
              <span>Thank you! Your message has been sent successfully.</span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
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
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="glass-input w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can we help?"
                className="glass-input w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Tell us what's on your mind..."
                className="glass-input w-full resize-none"
                style={{ borderRadius: '20px' }}
              ></textarea>
            </div>

            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
              <FiSend /> Send Message
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/30">
            <p className="text-sm text-gray-600 text-center">
              📱 We typically respond within 2-4 hours during business hours
            </p>
          </div>
        </motion.div>
      </div>

      {/* Social Media & Newsletter */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="grid md:grid-cols-2 gap-6 mt-12"
      >
        {/* Social Media */}
        <div className="glass-card p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Connect With Us</h3>
          <p className="text-gray-600 mb-6">Follow us on social media for fresh updates, recipes, and exclusive offers.</p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href="#"
                className={`flex items-center gap-2 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm hover:bg-emerald-50 transition-all hover:scale-105 ${social.color}`}
              >
                <span className="text-xl">{social.icon}</span>
                <span className="text-sm font-medium">{social.name}</span>
              </a>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
            <span>📍 Follow us:</span>
            <span className="flex items-center gap-1">🌱 <FiGlobe className="inline" /> @vegemarket</span>
          </div>
        </div>

        {/* Newsletter */}
        <div className="glass-card p-8 bg-gradient-to-br from-emerald-50/30 to-white/30">
          <h3 className="text-xl font-bold text-gray-800 mb-4">📬 Newsletter</h3>
          <p className="text-gray-600 mb-4">
            Subscribe to get organic tips, new product alerts, and exclusive discounts.
          </p>
          <div className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="glass-input w-full"
            />
            <button className="btn-primary w-full flex items-center justify-center gap-2">
              <FiSend /> Subscribe Now
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            🔒 No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-12 glass-card p-8"
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">❓ Frequently Asked Questions</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="p-4 bg-white/30 backdrop-blur-sm rounded-xl">
              <h4 className="font-semibold text-gray-800">How fast is delivery?</h4>
              <p className="text-sm text-gray-600 mt-1">We deliver within 2-4 hours in most areas, and same-day delivery for all orders.</p>
            </div>
            <div className="p-4 bg-white/30 backdrop-blur-sm rounded-xl">
              <h4 className="font-semibold text-gray-800">Are all products organic?</h4>
              <p className="text-sm text-gray-600 mt-1">Yes! All our products are certified organic from trusted farms.</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="p-4 bg-white/30 backdrop-blur-sm rounded-xl">
              <h4 className="font-semibold text-gray-800">What's your return policy?</h4>
              <p className="text-sm text-gray-600 mt-1">100% satisfaction guarantee. If you're not happy, we'll replace or refund.</p>
            </div>
            <div className="p-4 bg-white/30 backdrop-blur-sm rounded-xl">
              <h4 className="font-semibold text-gray-800">Do you deliver nationwide?</h4>
              <p className="text-sm text-gray-600 mt-1">Currently serving major cities. We're expanding rapidly across the country.</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Chat CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mt-8 text-center"
      >
        <div className="glass-card inline-block p-6 px-8">
          <p className="text-gray-700">
            💬 Need instant help? <span className="font-medium text-emerald-600">Chat with us</span> or call <span className="font-medium">+1 (555) 123-4567</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}