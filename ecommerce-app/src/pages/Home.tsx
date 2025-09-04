import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 text-sm animate-fade-in-up">
        Sign up and get 20% off your first order.{" "}
        <a href="/sale" className="underline font-semibold hover:text-gray-300 transition">
          Sign Up Now
        </a>
      </div>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center bg-white relative">
        <section className="w-full flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-[#F6F6F6] relative animate-fade-in-up">
          <div className="max-w-lg">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
              FIND CLOTHES<br />THAT MATCHES<br />YOUR STYLE
            </h1>
            <p className="text-gray-600 mb-8 animate-fade-in-up delay-200">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <Link to="/products">
              <button className="bg-black text-white px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-gray-900 transition duration-300 transform hover:scale-105">
                Shop Now
              </button>
            </Link>
            <div className="flex gap-8 mt-12">
              {[
                { value: "200+", label: "International Brands" },
                { value: "2,000+", label: "High-Quality Products" },
                { value: "30,000+", label: "Happy Customers" }
              ].map((stat, i) => (
                <div key={i} className="animate-fade-in-up delay-[300ms]">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-12 md:mt-0 md:ml-12 flex-1 flex justify-center">
            <img
              src="pictures/3.png"
              alt="Fashionable people"
              className="w-[340px] md:w-[400px] rounded-xl transform transition duration-300 hover:scale-105"
            />
            <span className="absolute top-8 left-8 text-4xl text-black animate-pulse">✦</span>
            <span className="absolute bottom-8 right-8 text-4xl text-black animate-pulse">✦</span>
          </div>
        </section>

        {/* Brand Logos */}
        <div className="py-8 flex justify-center gap-12 w-full animate-fade-in-up">
          {["a", "q", "w", "e", "r"].map((logo, i) => (
            <img key={i} src={`/pictures/${logo}.png`} alt={`brand-${logo}`} className="h-8 hover:scale-110 transition" />
          ))}
        </div>

        {/* New Arrivals */}
        <section className="w-full px-8 py-12">
          <h2 className="text-3xl font-extrabold mb-8 text-center animate-fade-in-up">NEW ARRIVALS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { src: "5.png", name: "T-shirt with Tape Details", rating: "★★★★☆ 4.6/5", price: "$120" },
              { src: "6.png", name: "Skinny Fit Jeans", rating: "★★★☆☆ 3.5/5", price: "$240", old: "$260" },
              { src: "7.png", name: "Checkered Shirt", rating: "★★★★☆ 4.5/5", price: "$180" },
              { src: "1.png", name: "White Tshirt", rating: "★★★★☆ 4.5/5", price: "$130", old: "$160" }
            ].map((product, i) => (
              <div
                key={i}
                className="bg-[#F6F6F6] rounded-xl p-4 flex flex-col items-center transition transform hover:scale-105 duration-300 shadow-md"
              >
                <img src={`/pictures/${product.src}`} alt={product.name} className="h-32 mb-4" />
                <div className="font-semibold mb-1">{product.name}</div>
                <div className="text-yellow-500 text-sm mb-1">{product.rating}</div>
                <div>
                  <span className="font-bold text-lg">{product.price}</span>
                  {product.old && (
                    <>
                      <span className="line-through text-gray-400 ml-2">{product.old}</span>
                      <span className="ml-2 text-red-500 text-xs">20%</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link to="/products">
              <button className="border border-black px-8 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition duration-300">
                View All
              </button>
            </Link>
          </div>
        </section>

        {/* Top Selling (similar to above) */}
        {/* ...Repeat similar animation logic... */}

        {/* Browse by Dress Style */}
        <section className="w-full px-8 py-12">
          <h2 className="text-3xl font-extrabold mb-8 text-center animate-fade-in-up">BROWSE BY DRESS STYLE</h2>
          <div className="bg-[#F6F6F6] rounded-2xl p-8 overflow-x-auto scroll-smooth">
            <div className="flex gap-8 snap-x snap-mandatory">
              {[
                { src: "1.jpg", label: "Casual" },
                { src: "10.png", label: "Formal" },
                { src: "1.jpeg", label: "Party" },
                { src: "2.jpg", label: "Gym" },
                { src: "3.jpg", label: "Beach" },
                { src: "4.jpg", label: "Winter" },
                { src: "5.jpg", label: "Summer" },
                { src: "11.png", label: "Spring" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center min-w-[180px] snap-center transition-transform transform hover:scale-105 duration-300"
                >
                  <img src={`/pictures/${item.src}`} alt={item.label} className="w-40 h-40 mb-4 rounded-lg object-cover" />
                  <div className="font-semibold">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Happy Customers */}
        <section className="w-full px-8 py-12">
          <h2 className="text-3xl font-extrabold mb-8 text-center animate-fade-in-up">OUR HAPPY CUSTOMERS</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Sarah M.", review: "quality and style ... exceeded my expectations." },
              { name: "Alex K.", review: "align with my personal style ... remarkable" },
              { name: "James L.", review: "unique fashion pieces ... on-point trends." },
              { name: "Emily R.", review: "go-to destination ... unmatched quality." }
            ].map((cust, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition transform hover:scale-105 duration-300"
              >
                <div className="text-yellow-500 mb-2">★★★★★</div>
                <div className="font-semibold mb-1">{cust.name}</div>
                <div className="text-gray-600 text-sm mb-2">
                  "{cust.review}"
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="w-full px-8 py-12">
          <div className="bg-black rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-in-up">
            <div className="text-white text-2xl font-extrabold mb-4 md:mb-0">
              STAY UP TO DATE ABOUT OUR LATEST OFFERS
            </div>
            <form className="flex gap-4 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-2 rounded-full w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-white transition"
              />
              <button
                type="submit"
                className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300 transform hover:scale-105"
              >
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </section>
      </main>

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

          {/* Footer Links */}
          {/* Same as your original code — you can animate or add hover scale effects similarly */}
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
