import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import StarRating from "./StarRating";
import { RiSubtractFill } from "react-icons/ri";
import { IoAddOutline } from "react-icons/io5";

const SingleProduct = ({ handleCart, quantity, handleAdd, handleMinus }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) {
    return (
      <div>
        <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />
      </div>
    );
  }

  const productStock = product.stock;

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 items-center mt-10">
        <div className="border md:ml-60 bg-gray-50 md:h-[300px] md:w-[600px]">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-2xl">{product.title}</h1>
          <div className="flex items-center gap-3">
            <StarRating product={product} />
            {`(${product.reviews.length})`}
          </div>
          <div>
            <p className="text-2xl font-semibold my-2">{`$${product.price}`}</p>
            <p className="w-[75%] text-gray-500">{product.description}</p>
          </div>
          <div>
            <h1 className="text-xl font-medium mb-2">Quantity</h1>
            <div className="flex items-center gap-2">
              <RiSubtractFill
                onClick={handleMinus}
                className="cursor-pointer"
              />
              <input
                type="text"
                className="w-10 text-center bg-gray-50 py-1 caret-transparent"
                readOnly
                value={quantity}
              />
              <IoAddOutline
                onClick={() => handleAdd(productStock)}
                className="cursor-pointer"
              />
              <p className="ml-6 text-sm text-red-400">{`Only ${product.stock} items left`}</p>
            </div>
          </div>
          <div className="flex flex-row gap-5 mt-5">
            <button className="border px-7 py-4 font-semibold bg-blue-400 text-white hover:bg-blue-500">
              Buy Now
            </button>
            <button
              onClick={handleCart}
              className="border px-7 py-4 font-semibold bg-orange-400 text-white hover:bg-orange-500"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 md:ml-60">
        <h1 className="font-semibold text-xl mb-3">Reviews</h1>
        {product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <div
              key={index}
              className="border sm:w-[85%] bg-gray-100 py-2 px-4"
            >
              <p className="font-semibold">{review.reviewerName}:</p>
              <p className="text-gray-700">{review.comment}</p>
              <div className="text-sm text-gray-500">
                <StarRating product={product} />
              </div>
              <p className="text-xs text-gray-400">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
