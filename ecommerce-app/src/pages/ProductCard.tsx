import React from "react";
import { useCart } from "../context/useCart";

interface ProductCardProps {
  title: string;
  price: number;
  img: string;
  rating: number;
  oldPrice?: number;
  discount?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  img,
  rating,
  oldPrice,
  discount,
}) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition flex flex-col">
      {/* Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />

      {/* Title + rating */}
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-gray-500 mb-2">⭐ {rating}</p>

      {/* Price (with optional discount) */}
      {oldPrice ? (
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg font-semibold">${price}</span>
          <span className="line-through text-gray-400">${oldPrice}</span>
          {discount && (
            <span className="text-red-500 font-bold">-{discount}%</span>
          )}
        </div>
      ) : (
        <span className="text-lg font-semibold mb-2">${price}</span>
      )}

      {/* Add to Cart button */}
      <button
        onClick={() =>
          addToCart({
            id: title, 
            name: title,
            price,
            image: img,
          })
        }
        className="mt-auto w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
