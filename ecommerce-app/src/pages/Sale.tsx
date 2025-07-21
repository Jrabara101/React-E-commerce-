import React, { useState } from "react";

const COLORS = [
  "#000000", "#FF8686", "#7ED957", "#FFCD4E", "#3F9BF4", "#F6C6F6", "#F5F5F5"
];
const SIZES = [
  "XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"
];
const DRESS_STYLES = ["Casual", "Formal", "Party", "Gym"];

const PRODUCTS = [
  {
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
    image: "/products/tshirt1.png"
  },
  {
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
    image: "/products/tshirt2.png"
  },
  {
    name: "Black Striped T-shirt",
    price: 120,
    oldPrice: 150,
    discount: 30,
    rating: 5,
    image: "/products/tshirt3.png"
  },
  {
    name: "Skinny Fit Jeans",
    price: 240,
    oldPrice: 260,
    discount: 20,
    rating: 3.5,
    image: "/products/jeans1.png"
  },
  {
    name: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    image: "/products/shirt1.png"
  },
  {
    name: "Sleeve Striped T-shirt",
    price: 130,
    oldPrice: 160,
    discount: 30,
    rating: 4.5,
    image: "/products/tshirt4.png"
  },
  {
    name: "Vertical Striped Shirt",
    price: 212,
    oldPrice: 232,
    discount: 20,
    rating: 5,
    image: "/products/shirt2.png"
  },
  {
    name: "Courage Graphic T-shirt",
    price: 145,
    rating: 4,
    image: "/products/tshirt5.png"
  },
  {
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    rating: 3,
    image: "/products/shorts1.png"
  }
];

export default function Sale() {
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedStyle, setSelectedStyle] = useState("Casual");
  const [priceRange, setPriceRange] = useState([50, 260]);

  return (
    <div className="bg-[#F5F5F5] min-h-screen flex flex-col">
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
          <span className="text-2xl">🛒</span>
          <span className="text-2xl">👤</span>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="text-gray-500 text-sm px-8 py-4">
        Home &gt; <span className="text-black font-semibold">Casual</span>
      </div>

      <main className="flex-1 flex gap-8 px-8 pb-16">
        {/* Filters */}
        <aside className="w-64 bg-white rounded-xl p-6 shadow flex-shrink-0">
          <h3 className="font-bold mb-4">Filters</h3>
          <div className="mb-6">
            <div className="font-semibold mb-2">Categories</div>
            <ul className="space-y-1 text-gray-600">
              <li>T-shirts</li>
              <li>Shorts</li>
              <li>Shirts</li>
              <li>Hoodie</li>
              <li>Jeans</li>
            </ul>
          </div>
          <div className="mb-6">
            <div className="font-semibold mb-2">Price</div>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min={50}
                max={260}
                value={priceRange[0]}
                onChange={e => setPriceRange([+e.target.value, priceRange[1]])}
                className="w-20"
              />
              <input
                type="range"
                min={50}
                max={260}
                value={priceRange[1]}
                onChange={e => setPriceRange([priceRange[0], +e.target.value])}
                className="w-20"
              />
            </div>
            <div className="text-xs text-gray-500 mt-1">
              ${priceRange[0]} - ${priceRange[1]}
            </div>
          </div>
          <div className="mb-6">
            <div className="font-semibold mb-2">Colors</div>
            <div className="flex gap-2 flex-wrap">
              {COLORS.map(color => (
                <button
                  key={color}
                  className={`w-6 h-6 rounded-full border-2 ${selectedColor === color ? "border-black" : "border-gray-200"}`}
                  style={{ background: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>
          <div className="mb-6">
            <div className="font-semibold mb-2">Size</div>
            <div className="flex flex-wrap gap-2">
              {SIZES.map(size => (
                <button
                  key={size}
                  className={`px-2 py-1 rounded border text-xs ${selectedSize === size ? "bg-black text-white" : "bg-gray-100 text-gray-700"}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <div className="font-semibold mb-2">Dress Style</div>
            <ul className="space-y-1">
              {DRESS_STYLES.map(style => (
                <li
                  key={style}
                  className={`cursor-pointer ${selectedStyle === style ? "font-bold text-black" : "text-gray-600"}`}
                  onClick={() => setSelectedStyle(style)}
                >
                  {style}
                </li>
              ))}
            </ul>
          </div>
          <button className="w-full bg-black text-white py-2 rounded-full font-semibold mt-4">
            Apply Filter
          </button>
        </aside>

        {/* Product Grid */}
        <section className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Casual</h2>
            <div className="text-gray-500 text-sm">
              Showing 1-10 of 100 Products &nbsp;|&nbsp; Sort by:{" "}
              <select className="border rounded px-2 py-1 text-xs">
                <option>Most Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {PRODUCTS.map(product => (
              <div className="bg-white rounded-xl p-4 flex flex-col items-center shadow" key={product.name}>
                <img src={product.image} alt={product.name} className="h-40 mb-4 object-contain" />
                <div className="font-semibold mb-1 text-center">{product.name}</div>
                <div className="text-yellow-500 text-sm mb-1">
                  {"★".repeat(Math.round(product.rating))}
                  {"☆".repeat(5 - Math.round(product.rating))}
                  <span className="ml-1 text-gray-500">{product.rating.toFixed(1)}/5</span>
                </div>
                <div>
                  <span className="font-bold text-lg">${product.price}</span>
                  {product.oldPrice && (
                    <>
                      <span className="line-through text-gray-400 ml-2">${product.oldPrice}</span>
                      <span className="ml-2 text-red-500 text-xs">{product.discount}%</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-10">
            <button className="px-4 py-1 border rounded-full text-sm">Previous</button>
            <button className="w-8 h-8 rounded-full bg-black text-white">1</button>
            <button className="w-8 h-8 rounded-full">2</button>
            <button className="w-8 h-8 rounded-full">3</button>
            <span className="mx-2">...</span>
            <button className="w-8 h-8 rounded-full">10</button>
            <button className="px-4 py-1 border rounded-full text-sm">Next</button>
          </div>
        </section>
      </main>

      {/* Newsletter */}
      <section className="bg-black rounded-xl mx-8 mb-8 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
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
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <div className="text-2xl font-extrabold mb-4">SHOP.CO</div>
            <div className="text-gray-500 mb-4 max-w-xs">
              We have clothes that suit your style and which you’re proud to wear. From women to men.
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