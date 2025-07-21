import React, { useEffect, useState } from "react";
import axios from "axios";
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";

export default function Products() {
  const [products, setProducts] = useState([]);
  // Dummy filter state for UI only
  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedColor, setSelectedColor] = useState("#2563eb");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-[#F6F6F6] min-h-screen flex flex-col">
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 text-sm">
        Sign up and get 20% off your first order.{" "}
        <a href="#" className="underline font-semibold">
          Sign Up Now
        </a>
      </div>

      {/* Header */}
      <header className="w-full flex items-center justify-between px-8 py-6 bg-white shadow">
        <div className="text-2xl font-extrabold tracking-tight">SHOP.CO</div>
        <nav className="flex gap-6 text-gray-700 font-medium">
          <a href="#">Shop</a>
          <a href="#">On Sale</a>
          <a href="#">New Arrivals</a>
          <a href="#">Brands</a>
        </nav>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="px-3 py-1 rounded bg-gray-100 border border-gray-200"
          />
          <button aria-label="Cart" className="text-2xl hover:text-black transition">
            <HiOutlineShoppingCart />
          </button>
          <button aria-label="Account" className="text-2xl hover:text-black transition">
            <HiOutlineUser />
          </button>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="w-full bg-[#F6F6F6] px-8 py-4 text-gray-500 text-sm">
        Home <span className="mx-2">›</span> <span className="text-black font-semibold">Casual</span>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row gap-8 px-8 py-8">
        {/* Filters */}
        <aside className="w-full md:w-64 bg-white rounded-2xl p-6 mb-8 md:mb-0 shadow">
          <div className="font-bold text-lg mb-4">Filters</div>
          <div className="mb-6">
            <div className="font-semibold mb-2">Category</div>
            <div className="flex flex-col gap-2">
              <label><input type="checkbox" className="mr-2" />T-shirts</label>
              <label><input type="checkbox" className="mr-2" />Shorts</label>
              <label><input type="checkbox" className="mr-2" />Shirts</label>
              <label><input type="checkbox" className="mr-2" />Hoodie</label>
              <label><input type="checkbox" className="mr-2" />Jeans</label>
            </div>
          </div>
          <div className="mb-6">
            <div className="font-semibold mb-2">Price</div>
            <div className="flex items-center gap-2">
              <span>$20</span>
              <input type="range" min="20" max="200" className="flex-1 accent-black" />
              <span>$200</span>
            </div>
          </div>
          <div className="mb-6">
            <div className="font-semibold mb-2">Colors</div>
            <div className="flex gap-2 flex-wrap">
              {["#fde047", "#f87171", "#2563eb", "#22d3ee", "#a3e635", "#f472b6", "#a78bfa", "#000", "#fff"].map(
                (color) => (
                  <button
                    key={color}
                    className={`w-6 h-6 rounded-full border-2 ${selectedColor === color ? "border-black" : "border-white"}`}
                    style={{ background: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                )
              )}
            </div>
          </div>
          <div className="mb-6">
            <div className="font-semibold mb-2">Size</div>
            <div className="flex gap-2 flex-wrap">
              {["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"].map(
                (size) => (
                  <button
                    key={size}
                    className={`px-3 py-1 rounded-full border ${selectedSize === size ? "bg-black text-white" : "bg-white text-black"}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                )
              )}
            </div>
          </div>
          <div className="mb-6">
            <div className="font-semibold mb-2">Dress Style</div>
            <div className="flex flex-col gap-2">
              <label><input type="checkbox" className="mr-2" />Casual</label>
              <label><input type="checkbox" className="mr-2" />Formal</label>
              <label><input type="checkbox" className="mr-2" />Party</label>
              <label><input type="checkbox" className="mr-2" />Gym</label>
            </div>
          </div>
          <button className="w-full bg-black text-white py-2 rounded-full font-semibold mt-4">
            Apply Filter
          </button>
        </aside>

        {/* Products */}
        <section className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Casual</h2>
            <div className="text-gray-500 text-sm">
              Showing 1-10 of 100 Products &nbsp;|&nbsp; Sort by:{" "}
              <select className="border rounded px-2 py-1">
                <option>Most Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Example static products for layout */}
            <ProductCard title="Gradient Graphic T-shirt" price={145} img="/products/tshirt1.png" rating={3.5} />
            <ProductCard title="Polo with Tipping Details" price={180} img="/products/tshirt2.png" rating={4.5} />
            <ProductCard title="Black Striped T-shirt" price={120} img="/products/tshirt3.png" rating={5.0} oldPrice={160} discount={30} />
            <ProductCard title="Skinny Fit Jeans" price={240} img="/products/jeans1.png" rating={3.5} oldPrice={260} discount={20} />
            <ProductCard title="Checkered Shirt" price={180} img="/products/shirt1.png" rating={4.5} />
            <ProductCard title="Sleeve Striped T-shirt" price={130} img="/products/tshirt4.png" rating={4.5} oldPrice={160} discount={30} />
            <ProductCard title="Vertical Striped Shirt" price={212} img="/products/shirt2.png" rating={5.0} oldPrice={232} discount={20} />
            <ProductCard title="Courage Graphic T-shirt" price={145} img="/products/tshirt5.png" rating={4.0} />
            <ProductCard title="Loose Fit Bermuda Shorts" price={80} img="/products/shorts1.png" rating={3.0} />
          </div>
          {/* Pagination */}
          <div className="flex justify-between items-center mt-8">
            <button className="border px-4 py-1 rounded-full text-gray-600">Previous</button>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <button
                  key={n}
                  className={`w-8 h-8 rounded-full ${n === 1 ? "bg-black text-white" : "bg-white text-black border"}`}
                >
                  {n}
                </button>
              ))}
            </div>
            <button className="border px-4 py-1 rounded-full text-gray-600">Next</button>
          </div>
        </section>
      </main>

      {/* Newsletter */}
      <section className="w-full px-8 py-12">
        <div className="bg-black rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-2xl font-extrabold mb-4 md:mb-0">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </div>
          <form className="flex gap-4 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2 rounded-full w-full md:w-72"
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <div className="text-2xl font-extrabold mb-4">SHOP.CO</div>
            <div className="text-gray-500 mb-4 max-w-xs">
              We have clothes that suits your style and which you’re proud to wear. From women to men.
            </div>
            <div className="flex gap-4">
              <a href="#"><img src="/icons/facebook.svg" alt="Facebook" className="h-6" /></a>
              <a href="#"><img src="/icons/twitter.svg" alt="Twitter" className="h-6" /></a>
              <a href="#"><img src="/icons/instagram.svg" alt="Instagram" className="h-6" /></a>
              <a href="#"><img src="/icons/youtube.svg" alt="YouTube" className="h-6" /></a>
            </div>
          </div>
          <div className="flex flex-wrap gap-12">
            <div>
              <div className="font-bold mb-2">Company</div>
              <ul className="text-gray-500 space-y-1">
                <li><a href="#">About</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">Career</a></li>
              </ul>
            </div>
            <div>
              <div className="font-bold mb-2">Help</div>
              <ul className="text-gray-500 space-y-1">
                <li><a href="#">Customer Support</a></li>
                <li><a href="#">Delivery Details</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <div className="font-bold mb-2">FAQ</div>
              <ul className="text-gray-500 space-y-1">
                <li><a href="#">Account</a></li>
                <li><a href="#">Manage Deliveries</a></li>
                <li><a href="#">Orders</a></li>
                <li><a href="#">Payments</a></li>
              </ul>
            </div>
            <div>
              <div className="font-bold mb-2">Resources</div>
              <ul className="text-gray-500 space-y-1">
                <li><a href="#">Free eBooks</a></li>
                <li><a href="#">Development Tutorial</a></li>
                <li><a href="#">How to - Blog</a></li>
                <li><a href="#">YouTube Playlist</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 border-t pt-6">
          <div className="text-gray-400 text-sm">
            Shop.co © 2000-2023, All Rights Reserved
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <img src="/icons/visa.svg" alt="Visa" className="h-6" />
            <img src="/icons/mastercard.svg" alt="Mastercard" className="h-6" />
            <img src="/icons/paypal.svg" alt="Paypal" className="h-6" />
            <img src="/icons/applepay.svg" alt="Apple Pay" className="h-6" />
            <img src="/icons/googlepay.svg" alt="Google Pay" className="h-6" />
          </div>
        </div>
      </footer>
    </div>
  );
}

// Product Card Component
function ProductCard({
  title,
  price,
  img,
  rating,
  oldPrice,
  discount,
}: {
  title: string;
  price: number;
  img: string;
  rating: number;
  oldPrice?: number;
  discount?: number;
}) {
  return (
    <div className="bg-white rounded-xl p-4 flex flex-col items-center shadow">
      <img src={img} alt={title} className="h-32 mb-4 object-contain" />
      <div className="font-semibold mb-1">{title}</div>
      <div className="flex items-center gap-1 text-yellow-500 text-sm mb-1">
        {Array.from({ length: Math.floor(rating) }).map((_, i) => (
          <span key={i}>★</span>
        ))}
        {rating % 1 !== 0 && <span>☆</span>}
        <span className="ml-1 text-gray-500">{rating}/5</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-bold text-lg">${price}</span>
        {oldPrice && (
          <span className="line-through text-gray-400">${oldPrice}</span>
        )}
        {discount && (
          <span className="ml-1 text-red-500 text-xs">{discount}%</span>
        )}
      </div>
    </div>
  );
}