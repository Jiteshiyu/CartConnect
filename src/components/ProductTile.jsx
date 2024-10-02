import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/CartSlice.jsx";

export default function ProductTile({ product }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  // Function to add product to cart
  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  // Function to remove product from cart
  function handleRemoveFromCart() {
    dispatch(removeFromCart(product.id));
  }

  return (
    <div>
      {/* Product tile container */}
      <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-3 mb-8 ml-5 rounded-xl">
        {/* Product image */}
        <div className="h-[180px]">
          <img
            src={product?.image}
            alt={product?.title}
            className="object-cover h-full w-full"
          />
        </div>
        {/* Product title and price */}
        <div>
          <h1 className="w-40 truncate mt-2 text-gray-700 font-bold text-lg">
            {product?.title}
          </h1>
          <h2 className="w-40 truncate mt-2 text-gray-700 font-bold text-lg">
            ${product?.price}
          </h2>
        </div>
        {/* Button to add or remove product from cart */}
        <div className="flex items-center justify-center w-full">
          <button
            onClick={
              cart.some((item) => item.id === product.id)
                ? handleRemoveFromCart // Remove from cart if already in
                : handleAddToCart // Add to cart if not in
            }
            className="bg-red-950 text-white border-2 rounded-lg font-bold border-none px-4 py-2"
          >
            {/* Toggle button text */}
            {cart.some((item) => item.id === product.id)
              ? "Remove from cart"
              : "Add to cart"}{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
