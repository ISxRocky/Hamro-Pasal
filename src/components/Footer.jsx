import logo from "../assets/logo.png";
import { SiInstagram } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { BsWhatsapp } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={logo} className="mb-5 w-48" alt="logo image" />
          <p className="w-full md:w-2/3 text-gray-600 text-justify">
            Hamro Pasal is proud to serve customers all over Nepal with a vast
            array of products to meet every need. From trendy apparel to
            essential home goods, we are committed to delivering quality and
            convenience right to your doorstep. Our goal is to make shopping
            seamless and enjoyable, bringing you the best products at great
            prices!
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+977-0000000000</li>
            <li>hamropasal@gmail.com</li>
          </ul>
          <div className="flex mt-3 text-2xl gap-3 cursor-pointer">
            <SiInstagram className="hover:text-blue-600 transition duration-300" />
            <ImFacebook2 className="hover:text-blue-600 transition duration-300" />
            <BsWhatsapp className="hover:text-blue-600 transition duration-300" />
            <RiTwitterXLine className="hover:text-blue-600 transition duration-300" />
          </div>
        </div>
      </div>

      <div>
        <hr className="border-t border-gray-400" />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ HamroPasal.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
