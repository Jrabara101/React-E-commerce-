import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Products() {
  const [products, setProducts] = useState([]);

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
          <div key={product.id} className="border rounded p-4 shadow bg-white">
            <img src={product.image} alt={product.title} className="h-40 mx-auto" />
            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
            <p className="text-green-600 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
