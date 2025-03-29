import { assets } from "../assets/assets";
import { useState, useEffect } from "react";
import { CiPhone, CiMail } from "react-icons/ci";
import { constants } from "../assets/constants";
import { useStore } from "@nanostores/react";
import { $cart } from "../shared/cart";
import useLazyStore from "../assets/useLazyStore";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [cartData] = useLazyStore($cart, []);

  return (
    <div className="w-full border-b-4 rounded-lg border-[#0ac0ac]">
      {/* Primul rând: Logo + Contact Info */}
      <div className="flex justify-between items-center py-3 px-5">
        {/* Logo în stânga */}
        <a href="/">
          <img src={assets.logo.src} alt="logo" className="w-16 md:w-32" />
        </a>

        <div className="flex flex-col items-center">
          <p className="text-[#0ac0ac] text-sm md:text-4xl">
            Millennium {}
            <span className="text-black">Dach Roof</span>
          </p>
        </div>

        {/* Contact Info în dreapta */}
        <div className="flex flex-col gap-2 items-center text-gray-700">
          <div className="flex items-center gap-1">
            <CiPhone color="#0ac0ac" />
            <a
              href={"tel:" + constants.PHONE_NUMBER}
              className="cursor-pointer text-xs/tight md:text-xl/tight"
            >
              {constants.PHONE_NUMBER}
            </a>
          </div>
          <div className="flex items-center gap-1">
            <CiMail color="#0ac0ac" />
            <a
              href={"mailto:" + constants.EMAIL}
              className="cursor-pointer text-xs/tight md:text-base/tight"
            >
              {constants.EMAIL}
            </a>
          </div>
        </div>
      </div>

      {/* Al doilea rând: Navigație + Icons */}
      <div className="flex justify-between items-center py-2 px-5 rounded-md border-t-4 border-[#0ac0ac]">
        {/* Linkuri centrate */}
        <ul className="hidden sm:flex gap-5 text-xl text-gray-700 mx-auto">
          <a href="/" className="flex flex-col items-center gap-1">
            <p>ACASĂ</p>
          </a>
          {/* <a href="/products" className="flex flex-col items-center gap-1">
            <p>PRODUSE</p>
          </a> */}
          <a href="/about" className="flex flex-col items-center gap-1">
            <p>DESPRE NOI</p>
          </a>
          <a href="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
          </a>
        </ul>

        {/* Search, Profile, Cart & Menu */}
        <div className="flex items-center gap-4">
          {/* Search Icon
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon.src}
            alt="search"
            className="w-5 cursor-pointer"
          /> */}

          {/* Cart Icon */}
          <a href="/cart" className="relative">
            <img
              src={assets.cart_icon.src}
              alt="cart"
              className="w-7 min-w-7"
            />
            <p className="absolute right-[-12px] bottom-[-6px] w-5 text-center leading-4 bg-black text-white aspect-square rounded-full text-[14px]">
              {cartData.length}
            </p>
          </a>

          {/* Menu Icon (pentru mobil) */}
          <img
            src={assets.menu_icon.src}
            alt="menu"
            className="w-5 cursor-pointer sm:hidden"
            onClick={() => setVisible(!visible)}
          />
        </div>
      </div>

      {/* Sidebar pentru Mobile */}
      <div
        className={`absolute top-0 right-0 bottom-0 bg-white ease-in duration-300 overflow-hidden
      ${visible ? "w-full" : "w-0"}`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              src={assets.dropdown_icon.src}
              alt="close"
              className="h-4 rotate-180"
            />
            <p className="font-semibold">Back</p>
          </div>
          <a
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            href="/"
          >
            ACASĂ
          </a>
          {/* <a
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            href="/products"
          >
            PRODUSE
          </a> */}
          <a
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            href="/about"
          >
            DESPRE NOI
          </a>
          <a
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            href="/contact"
          >
            CONTACT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
