import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const Header = ({ number }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <Link to="/">
        <img
          className="w-44 sm:w-52 lg:w-64 cursor-pointer"
          src={logo}
          alt="logo image"
        />
      </Link>
      <ul className="hidden md:flex gap-5 text-[15px] text-gray-700 font-semibold">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-950 hidden" />
        </NavLink>
        <NavLink to="/products" className="flex flex-col items-center gap-1">
          <p>PRODUCTS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-950 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-950 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-950 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        <FaSearch className="text-2xl" />
        <FaRegUser className="text-2xl" />
        <Link to="/cart">
          <div className="relative inline-block">
            <CiShoppingCart className="text-4xl" />
            <p className="absolute bottom-0 right-0 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {number}
            </p>
          </div>
        </Link>
        <RxHamburgerMenu
          onClick={() => setVisible(true)}
          className="md:hidden text-2xl"
        />
      </div>

      {/* Sidebar menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <IoIosArrowBack />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/products"
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
