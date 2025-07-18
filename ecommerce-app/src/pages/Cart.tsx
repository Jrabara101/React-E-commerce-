import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map(item => (
              <li key={item.id} className="border p-4 rounded shadow bg-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p>${item.price} × {item.quantity}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-right">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <button
              onClick={clearCart}
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
