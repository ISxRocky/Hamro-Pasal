import { MdCurrencyExchange } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RiCustomerServiceLine } from "react-icons/ri";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <MdCurrencyExchange className="text-4xl m-auto mb-5" />
        <p className="font-semibold">East Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div>
        <IoIosCheckmarkCircle className="text-4xl m-auto mb-5" />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We provide 7 days free return policy</p>
      </div>
      <div>
        <RiCustomerServiceLine className="text-4xl m-auto mb-5" />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">Ww provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
