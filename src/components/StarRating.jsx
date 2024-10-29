const StarRating = ({ product }) => {
  const stars = Array.from({ length: 5 }, (v, i) => (
    <span
      key={i}
      className={
        i < product.rating ? "text-yellow-500 text-xl" : "text-gray-300 text-xl"
      }
    >
      ★
    </span>
  ));

  return <div className="flex">{stars}</div>;
};

export default StarRating;
