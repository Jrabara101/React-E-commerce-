import React from "react";
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 text-sm">
        Sign up and get 20% off your first order.{" "}
        <a href="#" className="underline font-semibold">
          Sign Up Now
        </a>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center bg-white relative">
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

        {/* Hero Section */}
        <section className="w-full flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-[#F6F6F6] relative">
          {/* Left: Text */}
          <div className="max-w-lg">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              FIND CLOTHES<br />THAT MATCHES<br />YOUR STYLE
            </h1>
            <p className="text-gray-600 mb-8">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-gray-900 transition">
              Shop Now
            </button>
            {/* Stats */}
            <div className="flex gap-8 mt-12">
              <div>
                <div className="text-2xl font-bold">200+</div>
                <div className="text-gray-500 text-sm">International Brands</div>
              </div>
              <div>
                <div className="text-2xl font-bold">2,000+</div>
                <div className="text-gray-500 text-sm">High-Quality Products</div>
              </div>
              <div>
                <div className="text-2xl font-bold">30,000+</div>
                <div className="text-gray-500 text-sm">Happy Customers</div>
              </div>
            </div>
          </div>
          {/* Right: Hero Image */}
          <div className="relative mt-12 md:mt-0 md:ml-12 flex-1 flex justify-center">
            <img
              src="/hero-image.png"
              alt="Fashionable people"
              className="w-[400px] md:w-[500px] rounded-xl object-cover"
            />
            {/* Decorative stars */}
            <span className="absolute top-8 left-8 text-4xl text-black">✦</span>
            <span className="absolute bottom-8 right-8 text-4xl text-black">✦</span>
          </div>
        </section>
      </main>

      {/* Brand Logos */}
      <div className="bg-black py-8 flex justify-center gap-12">
        <img src="/brands/versace.png" alt="Versace" className="h-8" />
        <img src="/brands/zara.png" alt="Zara" className="h-8" />
        <img src="/brands/gucci.png" alt="Gucci" className="h-8" />
        <img src="/brands/prada.png" alt="Prada" className="h-8" />
        <img src="/brands/calvin-klein.png" alt="Calvin Klein" className="h-8" />
      </div>
    </div>
  );
}