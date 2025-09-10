import { useState } from "react";
import { useCart } from "../context/useCart"; // ✅ import useCart

const COLORS = [
  "#000000", "#FF8686", "#7ED957", "#FFCD4E", "#3F9BF4", "#F6C6F6", "#F5F5F5"
];
const SIZES = [
  "XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"
];
const DRESS_STYLES = ["Casual", "Formal", "Party", "Gym"];

const PRODUCTS = [
  { name: "Gradient Graphic T-shirt", price: 100, oldPrice: 180, rating: 3.5, image: "/pictures/12.png" },
  { name: "Polo with Tipping Details", price: 130, oldPrice: 150, rating: 4.5, image: "/pictures/4.jpeg" },
  { name: "Black Striped T-shirt", price: 120, oldPrice: 150, discount: 30, rating: 5, image: "/pictures/13.png" },
  { name: "Skinny Fit Jeans", price: 240, oldPrice: 260, discount: 20, rating: 3.5, image: "/pictures/15.png" },
  { name: "Checkered Shirt", price: 180, rating: 4.5, image: "/pictures/5.jpeg" },
  { name: "Sleeve Striped T-shirt", price: 130, oldPrice: 160, discount: 30, rating: 4.5, image: "/pictures/2.png" },
  { name: "Vertical Striped Shirt", price: 212, oldPrice: 232, discount: 20, rating: 5, image: "/pictures/7.png" },
  { name: "Courage Graphic T-shirt", price: 145, rating: 4, image: "/pictures/19.png" },
  { name: "Loose Fit Bermuda Shorts", price: 80, rating: 3, image: "/pictures/20.png" }
];

export default function Sale() {
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedStyle, setSelectedStyle] = useState("Casual");
  const [priceRange, setPriceRange] = useState([50, 260]);

  const { addToCart } = useCart(); // ✅ gamitin yung addToCart

  return (
    <div className="bg-[#F5F5F5] min-h-screen flex flex-col">
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
                <div className="mb-3">
                  <span className="font-bold text-lg">${product.price}</span>
                  {product.oldPrice && (
                    <>
                      <span className="line-through text-gray-400 ml-2">${product.oldPrice}</span>
                      <span className="ml-2 text-red-500 text-xs">{product.discount}%</span>
                    </>
                  )}
                </div>
                {/* ✅ Add to Cart button */}
                <button
                  onClick={() =>
                    addToCart({
                      id: product.name,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                    })
                  }
                  className="mt-auto w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  Add to Cart
                </button>
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
              {["facebook", "x", "instagram", "youtube"].map((icon, i) => (
                <a key={i} href="#" className="hover:scale-125 transition">
                  <img
                    src={`/pictures/${icon}.png`}
                    alt={`${icon} logo`}
                    className="h-10 w-10 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links (pwede dagdagan dito if needed) */}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 border-t pt-6">
          <div className="text-gray-400 text-sm">
            Shop.co © 2000-2023, All Rights Reserved
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            {["Visa", "Mastercard", "Paypal", "Apple", "Google"].map((p, i) => (
              <img key={i} src={`/pictures/${p}.png`} alt={p} className="h-6 hover:scale-110 transition" />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
