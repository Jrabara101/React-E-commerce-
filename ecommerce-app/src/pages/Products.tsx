import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext'; 

export default function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border rounded p-4 shadow bg-white flex flex-col">
            <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain" />
            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
            <p className="text-green-600 font-bold">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-auto bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
