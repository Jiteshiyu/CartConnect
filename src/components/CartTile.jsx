import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/CartSlice.jsx";

export default function CartTile({ cartItem }) {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    // Dispatch action to remove item from cart
    dispatch(removeFromCart(cartItem.id));
  }

  return (
    <>
      {/* Container for the cart item */}
      <div className="max-w-lg mx-auto flex flex-col sm:flex-row justify-between items-center bg-red-500 my-2 p-5 rounded-xl">
        <div className="flex flex-col sm:flex-row justify-center items-center space-x-4 sm:space-y-0 sm:space-x-4">
          {/* Displays product image */}
          <img
            src={cartItem?.image}
            className="max-h-32 max-w-34 rounded-lg"
            alt={cartItem?.title}
          />
          <div className="space-y-5">
            <h1 className="text-white font-bold">{cartItem?.title}</h1>{" "}
            {/* Displays product title */}
            <p className="text-white font-extrabold">${cartItem?.price}</p>{" "}
            {/* Displays product price */}
          </div>
        </div>
        {/* Remove handler */}
        <div className="ml-0 sm:ml-5 sm:mt-0 mt-4">
          <button
            onClick={handleRemoveFromCart}
            className="bg-red-900 text-white font-bold border-2 rounded-lg px-4 py-2"
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}
