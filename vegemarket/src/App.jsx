import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import About from './pages/About';
import Contact from './pages/Contact';
import OrderSuccess from './pages/OrderSuccess';
import MyOrders from './pages/MyOrders';
import OrderDetails from './pages/OrderDetails';
import ForgotPassword from './pages/ForgotPassword';
import NotFound from './pages/NotFound';

function App() {
  console.log('App rendered');
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;