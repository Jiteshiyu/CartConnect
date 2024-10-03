import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "../components/ProductTile.jsx";

export default function Home() {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(false); 

  // Fetch list of products from the API
  async function fetchListOfProducts() {
    setLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    if (data) {
      setLoading(false); 
      setProducts(data);
    }
  }

  // Fetch products when component mounts
  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <div>
      {/* Display loading spinner if data is still being fetched */}
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={"120"}
            width={"120"}
            color="rgb(127,29,29)"
            visible={true}
          />
        </div>
      ) : (
        // Display product tiles once products are loaded
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-4">
          {/* Render each product tile */}
          {products && products.length
            ? products.map((productItem) => (
                <ProductTile key={productItem.id} product={productItem} />
              ))
            : null}
        </div>
      )}
    </div>
  );
}
