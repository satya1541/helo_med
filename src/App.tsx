import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ToastProvider } from './components/Toast';
import Home from './pages/Home';
import CategoriesPage from './pages/CategoriesPage';
import LoginPage from './pages/LoginPage';

import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import MedicinesPage from './pages/MedicinesPage';
import OrdersPage from './pages/OrdersPage';
import WalletPage from './pages/WalletPage';
import AboutPage from './pages/AboutPage';
import WishlistPage from './pages/WishlistPage';
import RefundPolicy from './pages/RefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ShippingPolicy from './pages/ShippingPolicy';
import './App.css'

import React from 'react';
import ScrollToTop from './components/ScrollToTop';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ToastProvider>
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/login" element={<LoginPage />} />

              <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/categories" element={<ProtectedRoute><CategoriesPage /></ProtectedRoute>} />
              <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
              <Route path="/medicines" element={<ProtectedRoute><MedicinesPage /></ProtectedRoute>} />
              <Route path="/orders" element={<ProtectedRoute><OrdersPage /></ProtectedRoute>} />
              <Route path="/wallet" element={<ProtectedRoute><WalletPage /></ProtectedRoute>} />
              <Route path="/about" element={<ProtectedRoute><AboutPage /></ProtectedRoute>} />
              <Route path="/wishlist" element={<ProtectedRoute><WishlistPage /></ProtectedRoute>} />

              <Route path="/refund-policy" element={<ProtectedRoute><RefundPolicy /></ProtectedRoute>} />
              <Route path="/privacy-policy" element={<ProtectedRoute><PrivacyPolicy /></ProtectedRoute>} />
              <Route path="/terms-of-service" element={<ProtectedRoute><TermsOfService /></ProtectedRoute>} />
              <Route path="/shipping-policy" element={<ProtectedRoute><ShippingPolicy /></ProtectedRoute>} />
            </Routes>
          </Router>
        </ToastProvider>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
