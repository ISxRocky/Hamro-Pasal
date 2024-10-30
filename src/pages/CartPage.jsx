import React, { useEffect } from "react";
import CartProduct from "../components/CartProduct";
import esewa from "../assets/esewa.png";
import khalti from "../assets/khalti.jpg";

const CartPage = ({
  cartItems,
  handleDeleteItem,
  totalPrice,
  setCartItems,
  cartNumber,
  setCartNumber,
}) => {
  const deliveryCharge = 5;
  const grandTotal = totalPrice + deliveryCharge;

  const handleIncreaseQuantity = (cartItem) => {
    if (cartItem.quantity < cartItem.stock) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === cartItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCartItems);
      const newCartNumber = cartNumber + 1;
      setCartNumber(newCartNumber);
    }
  };

  const handleDecreaseQuantity = (cartItem) => {
    if (cartItem.quantity > 1) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === cartItem.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      setCartItems(updatedCartItems);
      const newCartNumber = cartNumber - 1;
      setCartNumber(newCartNumber);
    }
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <p className="text-3xl my-44 text-center dynapuff">Cart is Empty</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_1fr] gap-4 mt-8">
          <div>
            {/* Header */}
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr] font-semibold text-sm mb-5 w-[77%] md:w-[82%] lg:w-[84%] sm:text-xl lg:text-2xl">
              <h1 className="text-left">Product Name</h1>
              <h1 className="text-center">Price</h1>
              <h1 className="text-center">Quantity</h1>
              <h1 className="text-center">Subtotal</h1>
            </div>

            {/* Product items */}
            <div className="w-full">
              {cartItems.map((item) => (
                <CartProduct
                  key={item.id}
                  cartItem={item}
                  handleDeleteItem={handleDeleteItem}
                  handleIncrease={handleIncreaseQuantity}
                  handleDecrease={handleDecreaseQuantity}
                />
              ))}
            </div>
          </div>

          {/* Cart summary */}
          <div className="border p-4 mt-4 lg:mt-0 h-auto">
            <p className="text-center text-2xl font-semibold">Cart Summary</p>
            <div className="text-right mt-2">
              <p>Total Price: ${totalPrice.toFixed(2)}</p>
              <p>Delivery Charge: ${deliveryCharge.toFixed(2)}</p>
              <hr className="border-gray-700 my-2" />
              <p>Grand Total: ${grandTotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-cente mt-3">
              <button className="border py-2 px-4 bg-green-600 hover:bg-green-500 text-white w-full">
                Checkout
              </button>
            </div>
            <p></p>
            <div className="w-40 flex flex-col sm:flex-row lg:flex-col mt-2">
              <img src={esewa} alt="" />
              <img src={khalti} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
