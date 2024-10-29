import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import SingleProduct from "./components/SingleProduct";

function App() {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState(0);

  const handleCart = () => {
    setCart((prev) => prev + quantity);
    setQuantity(1);
  };

  const handleAdd = (productStock) => {
    console.log(productStock);
    if (quantity < productStock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="mt-5 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<HomePage product={products} />} />
        <Route
          path="/products"
          element={<CollectionPage product={products} />}
        />
        <Route
          path="/product/:id"
          element={
            <SingleProduct
              handleCart={handleCart}
              quantity={quantity}
              handleAdd={handleAdd}
              handleMinus={handleMinus}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
