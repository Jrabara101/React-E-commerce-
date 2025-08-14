import React from 'react';
import { Link } from 'react-router-dom';

interface CartItem {
  name: string;
  color: string;
  price: number;
  image: string;
  quantity: number;
}

export default function Cart() {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([
    {
      name: "Gradient Graphic T-shirt",
      color: "White",
      price: 145,
      image: "/pictures/17.png",
      quantity: 1
    },
    {
      name: "Printed Tshirt",
      color: "Black/White",
      price: 240,
      image: "/pictures/5.png",
      quantity: 1
    }
  ]);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = subtotal * 0.2; // 20% discount
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    const newItems = [...cartItems];
    newItems[index].quantity = newQuantity;
    setCartItems(newItems);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 text-sm">
        Sign up and get 20% off your first order.{" "}
        <a href="#" className="underline font-semibold">
          Sign Up Now
        </a>
      </div>

     {/* Navbar */}
           <nav className="bg-white shadow animate-fade-in-up">
             <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
               <Link to="/" className="text-2xl font-bold text-black hover:text-gray-700 transition">
                 Shop.co
               </Link>
               <div className="flex space-x-6">
                 {["products", "cart",  "sale"].map((item) => (
                   <Link
                     key={item}
                     to={`/${item}`}
                     className="text-gray-700 hover:text-black transition duration-200"
                   >
                     {item.charAt(0).toUpperCase() + item.slice(1)}
                   </Link>
                 ))}
               </div>
             </div>
           </nav>

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
            {cartItems.map((item, index) => (
              <div key={index} className="flex gap-4 py-4 border-b">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{item.name}</h3>
                    <button className="text-red-500">✕</button>
                  </div>
                  <div className="text-gray-500">Color: {item.color}</div>
                  <div className="mt-2 flex justify-between items-center">
                    <div className="font-semibold">${item.price}</div>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                        className="w-8 h-8 border rounded-full"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        className="w-8 h-8 border rounded-full"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:w-[380px] bg-gray-50 rounded-xl p-6">
            <h2 className="font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-red-500">
                <span>Discount (20%)</span>
                <span>-${discount}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>${deliveryFee}</span>
              </div>
            </div>
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>
            <button className="w-full bg-black text-white py-3 rounded-full font-semibold">
              Go to Checkout →
            </button>
          </div>
        </div>
      </main>

      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-black rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-white text-2xl font-bold">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="flex gap-4 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2 rounded-full flex-1"
            />
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
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