// ./components/CartItemRow.tsx
import React from "react";
import { useCart } from "../context/useCart";
import type { CartItem } from "../context/CartContext";

interface CartItemRowProps {
  item: CartItem;
}

const CartItemRow: React.FC<CartItemRowProps> = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex gap-4 py-4 border-b">
      <img
        src={item.image || "/pictures/placeholder.png"}
        alt={item.name}
        className="w-24 h-24 object-cover rounded"
      />
      <div className="flex-1">
        <div className="flex justify-between">
          <h3 className="font-semibold">{item.name}</h3>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500"
          >
            ✕
          </button>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <div className="font-semibold">${item.price}</div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="w-8 h-8 border rounded-full"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="w-8 h-8 border rounded-full"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemRow;
