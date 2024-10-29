import BestCollection from "../components/BestCollection";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import OurPolicy from "../components/OurPolicy";
import NewsLetterBox from "../components/NewsLetterBox";

const HomePage = ({ product }) => {
  return (
    <div>
      <Hero />
      <LatestCollection product={product} />
      <BestCollection product={product} />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  );
};

export default HomePage;
