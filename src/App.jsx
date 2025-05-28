import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
import Login from "./components/User/Login";
import { Signup } from "./components/User/Signup";
import About from "./components/About";
import Footer from "./components/Footer";
import ProductDetails from "./components/Products/ProductDetails";

function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
