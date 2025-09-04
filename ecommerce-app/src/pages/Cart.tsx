// ./pages/Cart.tsx
import React from "react";
import { useCart } from "../context/useCart";
import CartItemRow from "../components/CartItemRow";

const Cart: React.FC = () => {
  const { cartItems, clearCart } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2; // 20% discount
  const deliveryFee = cartItems.length > 0 ? 15 : 0; 
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 text-sm">
        Sign up and get 20% off your first order.{" "}
        <a href="/sale" className="underline font-semibold">
          Sign Up Now
        </a>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm">
          Home &gt; <span className="font-semibold">Cart</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">YOUR CART</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            {cartItems.length > 0 ? (
              <>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold">Cart Items</h2>
                  <button
                    onClick={clearCart}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Clear Cart
                  </button>
                </div>
                {cartItems.map((item) => (
                  <CartItemRow key={item.id} item={item} />
                ))}
              </>
            ) : (
              <p className="text-gray-500">Your cart is empty.</p>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:w-[380px] bg-gray-50 rounded-xl p-6">
            <h2 className="font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-red-500">
                <span>Discount (20%)</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
            </div>
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button
              disabled={cartItems.length === 0}
              className={`w-full py-3 rounded-full font-semibold transition ${
                cartItems.length === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              Go to Checkout →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
