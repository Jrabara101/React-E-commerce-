import React from "react";
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-black min-h-screen flex flex-col">
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
          <a href="Products">Shop</a>
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
          <button
            aria-label="Cart"
            className="text-2xl hover:text-black transition"
            onClick={() => navigate('/Cart')}
          >
            <HiOutlineShoppingCart />
          </button>
          <button aria-label="Account" className="text-2xl hover:text-black transition">
            <HiOutlineUser />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center bg-white relative">
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
              src="pictures/3.png"
              alt="Fashionable people"
              className="w-[340px] md:w-[400px] rounded-xl"
            />
            {/* Decorative stars */}
            <span className="absolute top-8 left-8 text-4xl text-black">✦</span>
            <span className="absolute bottom-8 right-8 text-4xl text-black">✦</span>
          </div>
        </section>

        {/* Brand Logos */}
        <div className="bg-black py-8 flex justify-center gap-12 w-full">
          <img src="/brands/versace.png" alt="Versace" className="h-8" />
          <img src="/brands/zara.png" alt="Zara" className="h-8" />
          <img src="/brands/gucci.png" alt="Gucci" className="h-8" />
          <img src="/brands/prada.png" alt="Prada" className="h-8" />
          <img src="/brands/calvin-klein.png" alt="Calvin Klein" className="h-8" />
        </div>

        {/* New Arrivals */}
        <section className="w-full px-8 py-12">
          <h2 className="text-3xl font-extrabold mb-8 text-center">NEW ARRIVALS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Product Card Example */}
            <div className="bg-[#F6F6F6] rounded-xl p-4 flex flex-col items-center">
              <img src="/products/tshirt1.png" alt="T-shirt with Tape Details" className="h-32 mb-4" />
              <div className="font-semibold mb-1">T-shirt with Tape Details</div>
              <div className="text-yellow-500 text-sm mb-1">★★★★☆ 4.6/5</div>
              <div className="font-bold text-lg">$120</div>
            </div>
            <div className="bg-[#F6F6F6] rounded-xl p-4 flex flex-col items-center">
              <img src="/products/jeans1.png" alt="Skinny Fit Jeans" className="h-32 mb-4" />
              <div className="font-semibold mb-1">Skinny Fit Jeans</div>
              <div className="text-yellow-500 text-sm mb-1">★★★☆☆ 3.5/5</div>
              <div>
                <span className="font-bold text-lg">$240</span>
                <span className="line-through text-gray-400 ml-2">$260</span>
                <span className="ml-2 text-red-500 text-xs">20%</span>
              </div>
            </div>
            <div className="bg-[#F6F6F6] rounded-xl p-4 flex flex-col items-center">
              <img src="/products/shirt1.png" alt="Checkered Shirt" className="h-32 mb-4" />
              <div className="font-semibold mb-1">Checkered Shirt</div>
              <div className="text-yellow-500 text-sm mb-1">★★★★☆ 4.5/5</div>
              <div className="font-bold text-lg">$180</div>
            </div>
            <div className="bg-[#F6F6F6] rounded-xl p-4 flex flex-col items-center">
              <img src="/products/tshirt2.png" alt="Sleeve Striped T-shirt" className="h-32 mb-4" />
              <div className="font-semibold mb-1">Sleeve Striped T-shirt</div>
              <div className="text-yellow-500 text-sm mb-1">★★★★☆ 4.5/5</div>
              <div>
                <span className="font-bold text-lg">$130</span>
                <span className="line-through text-gray-400 ml-2">$160</span>
                <span className="ml-2 text-red-500 text-xs">20%</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="border border-black px-8 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition">
              View All
            </button>
          </div>
        </section>

        {/* Top Selling */}
        <section className="w-full px-8 py-12">
          <h2 className="text-3xl font-extrabold mb-8 text-center">TOP SELLING</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-[#F6F6F6] rounded-xl p-4 flex flex-col items-center">
              <img src="/products/shirt2.png" alt="Vertical Striped Shirt" className="h-32 mb-4" />
              <div className="font-semibold mb-1">Vertical Striped Shirt</div>
              <div className="text-yellow-500 text-sm mb-1">★★★★★ 5.0/5</div>
              <div>
                <span className="font-bold text-lg">$212</span>
                <span className="line-through text-gray-400 ml-2">$232</span>
                <span className="ml-2 text-red-500 text-xs">20%</span>
              </div>
            </div>
            <div className="bg-[#F6F6F6] rounded-xl p-4 flex flex-col items-center">
              <img src="/products/tshirt3.png" alt="Courage Graphic T-shirt" className="h-32 mb-4" />
              <div className="font-semibold mb-1">Courage Graphic T-shirt</div>
              <div className="text-yellow-500 text-sm mb-1">★★★★☆ 4.0/5</div>
              <div className="font-bold text-lg">$145</div>
            </div>
            <div className="bg-[#F6F6F6] rounded-xl p-4 flex flex-col items-center">
              <img src="/products/shorts1.png" alt="Loose Fit Bermuda Shorts" className="h-32 mb-4" />
              <div className="font-semibold mb-1">Loose Fit Bermuda Shorts</div>
              <div className="text-yellow-500 text-sm mb-1">★★★☆☆ 3.0/5</div>
              <div className="font-bold text-lg">$80</div>
            </div>
            <div className="bg-[#F6F6F6] rounded-xl p-4 flex flex-col items-center">
              <img src="/products/jeans2.png" alt="Faded Skinny Jeans" className="h-32 mb-4" />
              <div className="font-semibold mb-1">Faded Skinny Jeans</div>
              <div className="text-yellow-500 text-sm mb-1">★★★★☆ 4.5/5</div>
              <div className="font-bold text-lg">$210</div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="border border-black px-8 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition">
              View All
            </button>
          </div>
        </section>

        {/* Browse by Dress Style */}
        <section className="w-full px-8 py-12">
          <h2 className="text-3xl font-extrabold mb-8 text-center">BROWSE BY DRESS STYLE</h2>
          <div className="bg-[#F6F6F6] rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <img src="/styles/casual.png" alt="Casual" className="h-24 mb-2 rounded-lg object-cover" />
              <div className="font-semibold">Casual</div>
            </div>
            <div className="flex flex-col items-center">
              <img src="/styles/formal.png" alt="Formal" className="h-24 mb-2 rounded-lg object-cover" />
              <div className="font-semibold">Formal</div>
            </div>
            <div className="flex flex-col items-center">
              <img src="/styles/party.png" alt="Party" className="h-24 mb-2 rounded-lg object-cover" />
              <div className="font-semibold">Party</div>
            </div>
            <div className="flex flex-col items-center">
              <img src="/styles/gym.png" alt="Gym" className="h-24 mb-2 rounded-lg object-cover" />
              <div className="font-semibold">Gym</div>
            </div>
          </div>
        </section>

        {/* Happy Customers */}
        <section className="w-full px-8 py-12">
          <h2 className="text-3xl font-extrabold mb-8 text-center">OUR HAPPY CUSTOMERS</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow flex flex-col">
              <div className="text-yellow-500 mb-2">★★★★★</div>
              <div className="font-semibold mb-1">Sarah M.</div>
              <div className="text-gray-600 text-sm mb-2">
                "I'm blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow flex flex-col">
              <div className="text-yellow-500 mb-2">★★★★★</div>
              <div className="font-semibold mb-1">Alex K.</div>
              <div className="text-gray-600 text-sm mb-2">
                "Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow flex flex-col">
              <div className="text-yellow-500 mb-2">★★★★★</div>
              <div className="font-semibold mb-1">James L.</div>
              <div className="text-gray-600 text-sm mb-2">
                "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also on-point with the latest trends."
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow flex flex-col">
              <div className="text-yellow-500 mb-2">★★★★★</div>
              <div className="font-semibold mb-1">Emily R.</div>
              <div className="text-gray-600 text-sm mb-2">
                "Shopco has become my go-to destination for all things fashion. The customer service is exceptional, and the quality of the products is unmatched."
              </div>
            </div>
          </div>
        </section>

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
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <div className="text-2xl font-extrabold mb-4">SHOP.CO</div>
            <div className="text-gray-500 mb-4 max-w-xs">
              We choose the styles that suit your style and which you’re proud to wear. From women to men.
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