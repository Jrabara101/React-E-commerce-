import React from "react";

type ProductCardProps = {
  title: string;
  price: number;
  img: string;
  rating: number;
  oldPrice?: number;
  discount?: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  img,
  rating,
  oldPrice,
  discount,
}) => (
  <div className="bg-white rounded-xl p-4 flex flex-col items-center shadow">
    <img src={img} alt={title} className="h-32 mb-4 object-contain" />
    <div className="font-semibold mb-1">{title}</div>
    <div className="flex items-center gap-1 text-yellow-500 text-sm mb-1">
      {Array.from({ length: Math.floor(rating) }).map((_, i) => (
        <span key={i}>★</span>
      ))}
      {rating % 1 !== 0 && <span>☆</span>}
      <span className="ml-1 text-gray-500">{rating}/5</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="font-bold text-lg">${price}</span>
      {oldPrice && (
        <span className="line-through text-gray-400">${oldPrice}</span>
      )}
      {discount && (
        <span className="ml-1 text-red-500 text-xs">{discount}%</span>
      )}
    </div>
  </div>
);

export default ProductCard;