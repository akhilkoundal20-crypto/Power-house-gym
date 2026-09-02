import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS, REVIEWS } from '../data/craftData';

const CraftContext = createContext();

export const CraftProvider = ({ children }) => {
  // Cart state persisted in localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('shailreet_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state persisted in localStorage
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('shailreet_wishlist');
      return saved ? JSON.parse(saved) : ['sr-001', 'sr-004'];
    } catch {
      return ['sr-001', 'sr-004'];
    }
  });

  // Orders state persisted in localStorage
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('shailreet_orders');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Custom Requests state
  const [customRequests, setCustomRequests] = useState(() => {
    try {
      const saved = localStorage.getItem('shailreet_custom_requests');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Reviews state (initial + user submitted)
  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem('shailreet_reviews');
      return saved ? JSON.parse(saved) : REVIEWS;
    } catch {
      return REVIEWS;
    }
  });

  // UI Drawer & Modal States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Cart Enhancements: Gift Wrap & Coupon
  const [isGiftWrap, setIsGiftWrap] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  // Notification Toasts
  const [toasts, setToasts] = useState([]);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('shailreet_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('shailreet_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('shailreet_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('shailreet_custom_requests', JSON.stringify(customRequests));
  }, [customRequests]);

  useEffect(() => {
    localStorage.setItem('shailreet_reviews', JSON.stringify(reviews));
  }, [reviews]);

  // Show Toast
  const showToast = (message, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3800);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Add to Cart
  const addToCart = (product, quantity = 1, customization = '', openDrawer = true) => {
    const cartItemId = `${product.id}-${customization ? customization.trim().toLowerCase() : 'default'}`;
    
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prevCart,
          {
            cartItemId,
            id: product.id,
            name: product.name,
            hindiName: product.hindiName,
            slug: product.slug,
            price: product.price,
            originalPrice: product.originalPrice,
            image: product.images ? product.images[0] : '/images/dehra-peacock.jpg',
            quantity,
            customization,
            categoryLabel: product.categoryLabel
          }
        ];
      }
    });

    showToast(`Added "${product.name.slice(0, 24)}..." to your craft basket! 🌿`);
    if (openDrawer) {
      setIsCartOpen(true);
    }
  };

  // Remove from Cart
  const removeFromCart = (cartItemId) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
    showToast('Item removed from your cart');
  };

  // Update Quantity
  const updateQuantity = (cartItemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  // Wishlist
  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        showToast('Removed from your craft wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Added to your craft wishlist ❤️');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  // Coupon Code
  const applyCoupon = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'HANDMADE10') {
      setAppliedCoupon({ code: 'HANDMADE10', discountPercent: 10, label: '10% Artisan Welcome Discount' });
      showToast('✨ Coupon HANDMADE10 applied: 10% OFF!');
      return { success: true, message: '10% discount applied!' };
    } else if (clean === 'FESTIVE15') {
      setAppliedCoupon({ code: 'FESTIVE15', discountPercent: 15, label: '15% Festive Celebration Offer' });
      showToast('✨ Coupon FESTIVE15 applied: 15% OFF!');
      return { success: true, message: '15% festive discount applied!' };
    } else {
      showToast('Invalid coupon code. Try HANDMADE10', 'error');
      return { success: false, message: 'Invalid coupon code. Try "HANDMADE10"' };
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('Coupon removed');
  };

  // Totals calculations
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = appliedCoupon ? Math.round((cartSubtotal * appliedCoupon.discountPercent) / 100) : 0;
  const giftWrapFee = isGiftWrap ? 99 : 0;
  const freeShippingThreshold = 999;
  const shippingFee = cartSubtotal === 0 ? 0 : (cartSubtotal >= freeShippingThreshold ? 0 : 99);
  const cartTotal = Math.max(0, cartSubtotal - discountAmount + giftWrapFee + shippingFee);

  // Place Order
  const placeOrder = (customerDetails) => {
    const orderId = `SR-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder = {
      orderId,
      date: new Date().toISOString(),
      formattedDate: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }),
      customer: customerDetails,
      items: [...cart],
      subtotal: cartSubtotal,
      discount: discountAmount,
      coupon: appliedCoupon ? appliedCoupon.code : null,
      giftWrap: isGiftWrap,
      giftWrapFee,
      shippingFee,
      total: cartTotal,
      status: 'Handcrafting Initiated',
      estimatedDelivery: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', {
        weekday: 'short',
        day: 'numeric',
        month: 'short'
      })
    };

    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    setAppliedCoupon(null);
    setIsGiftWrap(false);
    return newOrder;
  };

  // Submit Custom Request
  const submitCustomRequest = (formData) => {
    const requestId = `CR-${Math.floor(10000 + Math.random() * 90000)}`;
    const newRequest = {
      requestId,
      date: new Date().toISOString(),
      ...formData,
      status: 'Under Artisan Review'
    };
    setCustomRequests((prev) => [newRequest, ...prev]);
    showToast('✨ Your bespoke craft request has been sent to our Kangra artisans!');
    return newRequest;
  };

  // Add Review
  const addReview = (newReview) => {
    const reviewObj = {
      id: `rev-${Date.now()}`,
      date: 'Just now',
      verified: true,
      likes: 1,
      ...newReview
    };
    setReviews((prev) => [reviewObj, ...prev]);
    showToast('Thank you for sharing your review! ❤️');
  };

  return (
    <CraftContext.Provider
      value={{
        cart,
        cartCount,
        cartSubtotal,
        discountAmount,
        giftWrapFee,
        isGiftWrap,
        setIsGiftWrap,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        shippingFee,
        freeShippingThreshold,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        wishlist,
        wishlistCount: wishlist.length,
        toggleWishlist,
        isInWishlist,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isSearchOpen,
        setIsSearchOpen,
        quickViewProduct,
        setQuickViewProduct,
        searchQuery,
        setSearchQuery,
        orders,
        placeOrder,
        customRequests,
        submitCustomRequest,
        reviews,
        addReview,
        toasts,
        showToast,
        removeToast
      }}
    >
      {children}
    </CraftContext.Provider>
  );
};

export const useCraft = () => {
  const context = useContext(CraftContext);
  if (!context) {
    throw new Error('useCraft must be used within a CraftProvider');
  }
  return context;
};
