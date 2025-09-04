// ./components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/sale">Sale</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
