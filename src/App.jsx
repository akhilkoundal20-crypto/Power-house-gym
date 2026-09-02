import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CraftProvider } from './context/CraftContext';

// Common Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import SearchModal from './components/common/SearchModal';
import WishlistDrawer from './components/common/WishlistDrawer';
import ToastContainer from './components/common/ToastContainer';
import ScrollToTop from './components/common/ScrollToTop';
import CartDrawer from './components/cart/CartDrawer';
import QuickViewModal from './components/shop/QuickViewModal';

// Pages
import Home from './pages/Home';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CustomOrderPage from './pages/CustomOrderPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import AboutPage from './pages/AboutPage';
import ReviewsPage from './pages/ReviewsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <CraftProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen w-full max-w-full overflow-x-clip flex flex-col bg-[#FAF7F2] text-[#23201D]">
          
          {/* Header */}
          <Navbar />

          {/* Main View Area */}
          <main className="flex-1 w-full max-w-full overflow-x-clip">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:slug" element={<ProductDetailPage />} />
              <Route path="/custom-orders" element={<CustomOrderPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/order-success/:orderId" element={<OrderSuccessPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />

          {/* Drawers and Overlays */}
          <CartDrawer />
          <WishlistDrawer />
          <SearchModal />
          <QuickViewModal />
          <ToastContainer />
          
        </div>
      </BrowserRouter>
    </CraftProvider>
  );
}

export default App;
