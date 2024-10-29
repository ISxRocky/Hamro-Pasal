import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const Products = ({ product }) => {
  return (
    <div className="border border-gray-700 p-4 flex flex-col h-full bg-gray-50">
      <Link
        className="text-gray-700 cursor-pointer flex-grow"
        to={`/product/${product.id}`}
      >
        <div className="overflow-hidden">
          <img
            className="hover:scale-110 transition ease-in-out"
            src={product.thumbnail}
            alt={product.title}
          />
        </div>
      </Link>
      <div className="pt-3 pb-1">
        <p className="text-base font-semibold">{product.title}</p>
        <p className="text-sm font-medium">${product.price}</p>
        <StarRating product={product} />
      </div>
    </div>
  );
};

export default Products;
