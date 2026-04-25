/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import AuthPage, { type AuthViewState } from './pages/AuthPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import ReviewPage from './pages/ReviewPage';
import ContactPage from './pages/ContactPage';
import AllOrdersPage from './pages/AllOrdersPage';

type PageState = 'landing' | 'auth' | 'cart' | 'checkout' | 'success' | 'review' | 'contact' | 'orders';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageState>('landing');
  const [authView, setAuthView] = useState<AuthViewState>('signin');

  const handleNavigate = (page: string) => {
    if (page === 'signup' || page === 'signin') {
      setAuthView(page);
      setCurrentPage('auth');
      return;
    }

    if (page === 'auth') {
      setAuthView('signin');
      setCurrentPage('auth');
      return;
    }

    setCurrentPage(page as PageState);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <div className="flex-1 w-full flex flex-col items-center justify-between">
        {currentPage === 'landing' && (
          <LandingPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'auth' && (
          <AuthPage onBack={() => setCurrentPage('landing')} initialView={authView} />
        )}
        {currentPage === 'cart' && (
          <ShoppingCartPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'checkout' && (
          <CheckoutPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'success' && (
          <OrderSuccessPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'review' && (
          <ReviewPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'orders' && (
          <AllOrdersPage onNavigate={handleNavigate} />
        )}

        {/* Hide footer on auth pages so that it doesn't break the auth layout */}
        {currentPage !== 'auth' && <Footer />}
      </div>
    </div>
  );
}
