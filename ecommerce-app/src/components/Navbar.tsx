// ./components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { useCart } from "../context/useCart";

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-2xl font-extrabold">
        SHOP.CO
      </Link>

      {/* Links */}
      <div className="flex items-center gap-6">
        <Link to="/sale" className="hover:text-gray-600">
          Sale
        </Link>
        <Link to="/products" className="hover:text-gray-600">
          Products
        </Link>
        <Link to="/cart" className="relative hover:text-gray-600">
          🛒 Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
              {cartCount}
            </span>
          )}
        </Link>

        {/* Auth section */}
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-700">Hi, {user.email}</span>
            <button
              onClick={logout}
              className="text-red-500 hover:underline text-sm"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
