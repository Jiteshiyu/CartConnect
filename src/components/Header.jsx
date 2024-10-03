import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      {/* Navigation bar container */}
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        {/* Link to homepage */}
        <Link to={"/"}>
          <div className="ml-5">
            <h1 className="text-red-900 font-bold text-2xl cursor-pointer tracking-wide">
              CartConnect
            </h1>
          </div>
        </Link>
        {/* Navigation links */}
        <ul className="flex list-none items-center space-x-6 text-black text-2xl font-semibold mr-5">
          {/* Link to home */}
          <Link to={"/"}>
            <li className="cursor-pointer">Home</li>
          </Link>
          {/* Link to cart */}
          <Link to={"/cart"}>
            <li className="cursor-pointer">Cart</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
