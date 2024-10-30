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
import CartPage from "./pages/CartPage";

function App() {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [cartNumber, setCartNumber] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCartItems, { ...product, quantity }];
      }
    });

    setCartNumber((prev) => prev + quantity);
    setQuantity(1);
  };

  const handleDeleteItem = (cartItem) => {
    const updatedCart = cartItems.filter((item) => item.id !== cartItem.id);
    setCartItems(updatedCart);
    setCartNumber((prev) => prev - cartItem.quantity);
  };

  // Calculate total price whenever cartItems change
  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [cartItems]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="mt-5 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Header number={cartNumber} />
      <Routes>
        <Route path="/" element={<HomePage product={products} />} />
        <Route path="/products" element={<CollectionPage product={products} />} />
        <Route
          path="/product/:id"
          element={
            <SingleProduct
              handleCart={handleCart}
              quantity={quantity}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              handleDeleteItem={handleDeleteItem}
              totalPrice={totalPrice}
              setCartItems={setCartItems} 
              setCartNumber={setCartNumber}
              cartNumber={cartNumber}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
