import React from "react";
import Products from "./Products";
import Title from "./Title";

const BestCollection = ({ product }) => {
  return (
    <div className="my-10">
      <div className="text-center text-3xl">
        <Title text1={"BEST"} text2={"PRODUCTS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Experience our Best Collection, a mix of premium products from all
          categories. Elevate your everyday life with our top picks!
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 mt-4">
        {product.slice(0, 5).map((product) => (
          <Products product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default BestCollection;
