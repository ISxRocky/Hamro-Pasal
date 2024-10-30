import React from "react";
import { MdDelete } from "react-icons/md";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { IoMdArrowDropdownCircle } from "react-icons/io";

const CartProduct = ({ cartItem, handleDeleteItem, handleIncrease, handleDecrease }) => {
  const totalPrice = cartItem.price * cartItem.quantity;

  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_1fr_auto] items-center gap-4 mb-4 border-b pb-4 text-[15px] md:text-xl">
      {/* Left side with product details */}
      <h2 className="text-left">{cartItem.title}</h2>
      <p className="text-center">${cartItem.price}</p>
      
      {/* Quantity Control */}
      <div className="flex items-center justify-center gap-2">
        <IoMdArrowDropdownCircle 
          onClick={() => handleDecrease(cartItem)} 
          className="cursor-pointer text-xl" 
        />
        <h1 className="text-center">{cartItem.quantity}</h1>
        <IoMdArrowDropupCircle 
          onClick={() => handleIncrease(cartItem)} 
          className="cursor-pointer text-xl" 
        />
      </div>

      <p className="text-center">${totalPrice.toFixed(2)}</p>

      {/* Right side with image and delete icon */}
      <div className="flex items-center gap-2">
        <div className="w-20 h-20 lg:w-24 lg:h-24">
          <img
            src={cartItem.thumbnail}
            alt={cartItem.title}
            className="object-cover w-full h-full"
          />
        </div>
        <MdDelete
          onClick={() => handleDeleteItem(cartItem)}
          className="text-2xl text-red-500 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default CartProduct;
