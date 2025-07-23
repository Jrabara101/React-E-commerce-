import { useCart } from '../context/CartContext';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [promo, setPromo] = useState('');
  const [newsletter, setNewsletter] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0.2);

  const subtotal = useMemo(() => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0), [cartItems]);
  const discount = useMemo(() => subtotal * discountPercent, [subtotal, discountPercent]);
  const deliveryFee = cartItems.length > 0 ? 15 : 0;
  const total = subtotal - discount + deliveryFee;

  const applyPromo = () => {
    if (promo.toLowerCase() === 'save10') {
      setDiscountPercent(0.1);
    } else if (promo.toLowerCase() === 'save25') {
      setDiscountPercent(0.25);
    } else {
      alert('Invalid promo code.');
    }
  };

  return (
    <motion.div
      className="max-w-md mx-auto bg-[#fafafa] min-h-screen px-4 py-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Breadcrumb */}
      <nav className="text-xs text-gray-400 mb-2">
        Home &gt; <span className="text-black font-medium">Cart</span>
      </nav>

      <h2 className="text-2xl font-bold mb-4 tracking-tight">YOUR CART</h2>

      {/* Cart Items */}
      <div className="space-y-4 mb-6">
        <AnimatePresence>
          {cartItems.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              No items in cart.
            </motion.p>
          ) : (
            cartItems.map(item => (
              <motion.div
                key={item.id}
                className="flex bg-white rounded-xl p-4 shadow items-center gap-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0" />
                <div className="flex-1">
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-xs text-gray-500">Size: Large</div>
                  <div className="text-xs text-gray-500">Color: White</div>
                  <div className="font-bold text-lg mt-1">${item.price}</div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-600"
                    title="Remove"
                  >
                    <span className="text-xl">🗑️</span>
                  </button>
                  <div className="flex items-center border rounded px-2 py-1">
                    <button
                      className="px-1 text-lg"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >-</button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      className="px-1 text-lg"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >+</button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Order Summary */}
      <motion.div
        className="bg-white rounded-xl p-5 shadow mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="font-semibold mb-4">Order Summary</h3>
        <div className="flex justify-between mb-2 text-sm">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(0)}</span>
        </div>
        <div className="flex justify-between mb-2 text-sm">
          <span>Discount (-{(discountPercent * 100).toFixed(0)}%)</span>
          <span className="text-red-500">-${discount.toFixed(0)}</span>
        </div>
        <div className="flex justify-between mb-2 text-sm">
          <span>Delivery Fee</span>
          <span>${deliveryFee}</span>
        </div>
        <hr className="my-3" />
        <div className="flex justify-between font-bold text-lg mb-3">
          <span>Total</span>
          <span>${total.toFixed(0)}</span>
        </div>
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            placeholder="Add promo code"
            className="flex-1 border rounded px-3 py-2 text-sm"
            value={promo}
            onChange={e => setPromo(e.target.value)}
          />
          <button
            onClick={applyPromo}
            className="bg-black text-white px-4 py-2 rounded font-semibold text-sm"
          >
            Apply
          </button>
        </div>
        <button className="w-full bg-black text-white py-3 rounded font-semibold text-base flex items-center justify-center gap-2">
          Go to Checkout <span className="text-lg">→</span>
        </button>
      </motion.div>

      {/* Newsletter */}
      <motion.div
        className="bg-black rounded-xl p-5 mb-6 text-white text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="font-bold text-lg mb-2 leading-tight">
          STAY UPTO DATE<br />ABOUT OUR LATEST OFFERS
        </div>
        <div className="flex gap-2 mt-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 rounded px-3 py-2 text-black"
            value={newsletter}
            onChange={e => setNewsletter(e.target.value)}
          />
          <button className="bg-white text-black px-4 py-2 rounded font-semibold text-sm">
            Subscribe
          </button>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="text-xs text-gray-500 mt-8">
        <div className="font-bold text-black mb-2">SHOP.CO</div>
        <div className="mb-4">We have clothes that suit your style and which you're proud to wear. From women to men.</div>
        <div className="mb-2">Shop.co © 2000-2023, All Rights Reserved</div>
        <div className="flex gap-2">
          <img src="/visa.svg" alt="Visa" className="h-5" />
          <img src="/paypal.svg" alt="Paypal" className="h-5" />
          <img src="/mastercard.svg" alt="Mastercard" className="h-5" />
          <img src="/applepay.svg" alt="Apple Pay" className="h-5" />
          <img src="/googlepay.svg" alt="Google Pay" className="h-5" />
        </div>
      </footer>
    </motion.div>
  );
}
