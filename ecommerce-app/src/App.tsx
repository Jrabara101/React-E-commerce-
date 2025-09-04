import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Sale from "./pages/Sale";

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* Auth routes without Navbar */}
          <Route path="/login" element={<Login />} />

          {/* Routes with shared Navbar */}
          <Route
            element={
              <>
                <Navbar />
                <Outlet />
              </>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/sale" element={<Sale />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
