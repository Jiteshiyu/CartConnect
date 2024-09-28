import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/CartSlice.jsx";

export default function CartTile({ cartItem }) {
  const dispatch = useDispatch();
  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }

  return (
    <>
      <div className="max-w-lg mx-auto flex justify-between items-center bg-red-500 my-2 p-5 rounded-xl">
        <div className="flex justify-center items-center space-x-4">
          <img
            src={cartItem?.image}
            className="h-36 w-36 rounded-lg"
            alt={cartItem?.title}
          />
          <div className="space-y-5">
            <h1 className="text-white font-bold">{cartItem?.title}</h1>
            <p className="text-white font-extrabold">${cartItem?.price}</p>
          </div>
        </div>
        <div className="ml-5">
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
