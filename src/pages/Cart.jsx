import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/CartTile.jsx";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  // Get cart state from Redux store
  const { cart } = useSelector((state) => state);

  // Calculate total cart value when cart changes
  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center px-4">
      {cart && cart.length ? (
        <>
          {/* Cart summary */}
          <div className="w-full max-w-2xl text-center mt-5">
            <h1 className="font-bold text-2xl text-black">Your Cart Summary</h1>
            <div className="p-3">
              <p className="text-lg">
                <span className="text-gray-800 font-semibold">
                  Total Items:{" "}
                </span>
                {cart.length}
              </p>
              {/* Display total cart amount */}
              <p className="text-lg">
                <span className="text-gray-800 font-semibold">
                  Total Amount:{" "}
                </span>
                ${totalCart.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Cart items */}
          <div className="flex flex-col mt-3 mb-7 max-w-6xl w-full">
            {/* Render each cart item */}
            {cart.map((cartItem) => (
              <CartTile key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>
        </>
      ) : (
        // Message when cart is empty
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-2xl mb-5">
            Your cart is empty!
          </h1>
          <Link to="/">
            <button className="bg-red-900 text-white rounded-lg font-bold border-none px-4 py-2">
              SHOP NOW!
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
