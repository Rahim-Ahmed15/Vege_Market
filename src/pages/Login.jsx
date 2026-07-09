import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiLock,
  FiUser,
  FiCheckCircle,
  FiAlertCircle,
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiFacebook,
  FiTwitter,
  FiGithub,
  FiShield
} from 'react-icons/fi';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    // Simulate API call
    setTimeout(() => {
      if (formData.email === 'demo@vegemarket.com' && formData.password === 'password123') {
        setSuccess('Login successful! Redirecting...');
        setTimeout(() => navigate('/'), 1500);
      } else {
        setError('Invalid email or password. Try demo@vegemarket.com / password123');
      }
      setIsLoading(false);
    }, 1500);
  };

  const socialLogin = (provider) => {
    alert(`Logging in with ${provider}...`);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="glass-card p-8 md:p-10 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 text-8xl opacity-5 select-none">🌿</div>
          <div className="absolute bottom-0 left-0 text-8xl opacity-5 select-none">🥬</div>
          
          {/* Logo/Header */}
          <div className="text-center mb-8 relative z-10">
            <div className="text-5xl mb-3">🌿</div>
            <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
            <p className="text-gray-600 mt-2">Sign in to continue shopping fresh</p>
          </div>

          {/* Error/Success Messages */}
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 bg-rose-50/80 backdrop-blur-sm rounded-xl border border-rose-200 flex items-center gap-2 text-rose-700 text-sm"
            >
              <FiAlertCircle /> {error}
            </motion.div>
          )}
          {success && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 bg-emerald-50/80 backdrop-blur-sm rounded-xl border border-emerald-200 flex items-center gap-2 text-emerald-700 text-sm"
            >
              <FiCheckCircle /> {success}
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="glass-input w-full pl-11"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Link to="/forgot-password" className="text-xs text-emerald-600 hover:text-emerald-700 font-medium">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="glass-input w-full pl-11 pr-11"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                />
                Remember me
              </label>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <FiShield /> Secure
              </span>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                <>
                  Sign In <FiArrowRight />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6 relative z-10">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-400 font-medium">OR CONTINUE WITH</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Social Login */}
          <div className="flex gap-3 relative z-10">
            <button 
              onClick={() => socialLogin('Google')}
              className="flex-1 glass p-3 rounded-xl hover:bg-white/60 transition flex items-center justify-center gap-2 text-sm font-medium text-gray-700"
            >
              <span className="text-xl">🔵</span> Google
            </button>
            <button 
              onClick={() => socialLogin('Facebook')}
              className="flex-1 glass p-3 rounded-xl hover:bg-white/60 transition flex items-center justify-center gap-2 text-sm font-medium text-gray-700"
            >
              <FiFacebook className="text-blue-600" /> Facebook
            </button>
            <button 
              onClick={() => socialLogin('Apple')}
              className="flex-1 glass p-3 rounded-xl hover:bg-white/60 transition flex items-center justify-center gap-2 text-sm font-medium text-gray-700"
            >
              <span className="text-xl">🍎</span> Apple
            </button>
          </div>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600 mt-6 relative z-10">
            Don't have an account?{' '}
            <Link to="/register" className="text-emerald-600 hover:text-emerald-700 font-semibold">
              Create one now
            </Link>
          </p>

          {/* Demo Credentials */}
          <div className="mt-4 p-3 bg-emerald-50/50 backdrop-blur-sm rounded-xl text-center text-xs text-gray-500 relative z-10 border border-emerald-200">
            <p className="font-medium text-emerald-700">Demo Credentials</p>
            <p>Email: demo@vegemarket.com</p>
            <p>Password: password123</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}