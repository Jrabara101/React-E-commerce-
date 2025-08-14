import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login attempt with:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Simple Navigation */}
      <nav className="w-full px-8 py-4 flex justify-between items-center border-b">
        <Link to="/" className="text-2xl font-bold text-black">
          Shop.co
        </Link>
        <button 
          onClick={() => navigate(-1)}
          className="text-gray-600 hover:text-black flex items-center gap-2 transition-colors"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Go back
        </button>
      </nav>

      <div className="flex-1 flex">
        {/* Left Side - Login Form */}
        <div className="w-1/2 flex flex-col justify-center px-20">
          <h1 className="text-4xl font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-600 mb-8">Please enter your details to sign in</p>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input 
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent"
                required
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input 
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="rounded border-gray-300 text-black focus:ring-black"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-gray-600 hover:text-black">
                Forgot Password?
              </Link>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition duration-200"
            >
              Sign In
            </button>
          </form>
          
          <p className="text-center mt-6 text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-black font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        {/* Right Side - Hero Image */}
        <div className="w-1/2 bg-[#F6F6F6] flex items-center justify-center relative">
          <div className="max-w-lg px-8">
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              FIND CLOTHES<br />THAT MATCHES<br />YOUR STYLE
            </h1>
            <p className="text-gray-600 mb-8">
              Browse through our diverse range of meticulously crafted garments, 
              designed to bring out your individuality.
            </p>
            <div className="flex gap-8 mt-12">
              {[
                { value: "200+", label: "International Brands" },
                { value: "2,000+", label: "High-Quality Products" },
                { value: "30,000+", label: "Happy Customers" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <span className="absolute top-8 right-8 text-4xl animate-pulse">✦</span>
          <span className="absolute bottom-8 left-8 text-4xl animate-pulse">✦</span>
        </div>
      </div>
    </div>
  );
}