import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Header from "./components/Header.jsx";

export default function App() {
  return (
    <div>
      {/* Rendering the Header component */}
      <Header />
      {/* Setting up routes for the application */}
      <Routes>
        {/* Route for Home page */}
        <Route exact path="/" element={<Home />} />
        {/* Route for Cart page */}
        <Route path="/cart" element={<Cart />} /> 
      </Routes>
    </div>
  );
}
