import Products from "../components/Products";
import Title from "../components/Title";

const CollectionPage = ({ product }) => {
  return (
    <div className="flex flex-col">
      <hr className="mt-4 border-t border-gray-200" />
      <div className="text-3xl mt-5">
        <Title text1={"ALL"} text2={"PRODUCTS"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 mt-4">
        {product.map((product) => (
          <Products product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
