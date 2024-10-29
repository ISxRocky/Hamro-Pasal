import { useEffect, useState } from "react";
import Title from "./Title";
import Products from "./Products";

const LatestCollection = ({ product }) => {
  return (
    <div className=" flex flex-col my-10">
      <div className="text-center text-3xl">
        <Title text1={"LATEST"} text2={"PRODUCTS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Explore our latest collection, blending modern trends with timeless
          style. Each piece is crafted for comfort and elegance, from vibrant
          patterns to cozy essentials—perfect for elevating your everyday
          wardrobe.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 mt-4">
        {product.slice(0, 10).map((product) => (
          <Products product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
