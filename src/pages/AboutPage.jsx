import Title from "../components/Title";
import image from "../assets/Shop.jpg";
import NewsLetterBox from "../components/NewsLetterBox";

const AboutPage = () => {
  return (
    <div>
      <hr className="mt-4 border-t border-gray-200" />
      <div className="flex flex-col">
        <div className="text-3xl mt-5 text-center mb-4">
          <Title text1={"ABOUT"} text2={"US"} />
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img src={image} alt="about image" className="w-[100%] md:w-[40%]" />
          <div className="flex flex-col">
            <p className="text-justify text-gray-500">
              Hamro Pasal is your go-to destination for all types of products
              across Nepal. Our vision is to provide a seamless shopping
              experience by offering a vast range of high-quality items at
              affordable prices. We understand the importance of customer
              satisfaction and strive to exceed expectations with every order.
              Whether you are looking for stylish clothing, innovative gadgets,
              or household essentials, Hamro Pasal is here to cater to your
              every need. Join us and discover the joy of shopping with us!
            </p>
            <h1 className="font-bold text-xl mt-7 mb-3 text-gray-700">
              Our Goals
            </h1>
            <p className="text-justify text-gray-500">
              Our primary goal is to deliver an exceptional shopping experience
              to our customers across Nepal. We strive to offer a diverse
              selection of products, seamless online shopping, and reliable
              delivery services to ensure that every customer is satisfied with
              their purchase.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <NewsLetterBox />
      </div>
    </div>
  );
};

export default AboutPage;
