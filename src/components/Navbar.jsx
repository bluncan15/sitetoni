import { assets } from "../assets/assets";
import { useState, useEffect } from "react";
import { CiPhone, CiMail } from "react-icons/ci";
import { MdArrowBackIos } from "react-icons/md";
import { constants } from "../assets/constants";
import { useStore } from "@nanostores/react";
import { $cart } from "../shared/cart";
import useLazyStore from "../assets/useLazyStore";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [cartData] = useLazyStore($cart, []);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="w-full border-b-4 rounded-lg border-[#0ac0ac]">
      {/* Primul rând: Logo + Contact Info */}
      <div className="flex justify-between items-center py-3 px-5">
        {/* Logo în stânga */}
        <a href="/sitetoni" className="hover:shadow-md">
          <img src={assets.logo.src} alt="logo" className="w-16 md:w-32" />
        </a>

        <div className="flex flex-col items-center">
          <p className="text-[#0ac0ac] text-sm md:text-4xl">
            Millennium {}
            <span className="text-black">Dach Roof</span>
          </p>
        </div>

        {/* Contact Info în dreapta */}
        <div className="flex flex-col gap-2 items-center text-black">
          <div className="flex items-center gap-1">
            <CiPhone color="#0ac0ac" />
            <a
              href={"tel:" + constants.PHONE_NUMBER}
              className="cursor-pointer text-xs/tight md:text-xl/tight hover:shadow-md"
            >
              {constants.PHONE_NUMBER}
            </a>
          </div>
          <div className="flex items-center gap-1">
            <CiMail color="#0ac0ac" />
            <a
              href={"mailto:" + constants.EMAIL}
              className="cursor-pointer text-xs/tight md:text-base/tight hover:shadow-md"
            >
              {constants.EMAIL}
            </a>
          </div>
        </div>
      </div>

      {/* Al doilea rând: Navigație + Icons */}
      <div className="flex justify-between items-center py-2 px-5 rounded-lg border-t-4 border-[#0ac0ac]">
        {/* Linkuri centrate */}
        <ul className="hidden sm:flex gap-5 text-xl text-black mx-auto">
          <a href="/sitetoni" className="flex flex-col items-center gap-1 hover:shadow-md">
            <p>ACASĂ</p>
          </a>
          {/* <a href="/products" className="flex flex-col items-center gap-1">
            <p>PRODUSE</p>
          </a> */}
          <a
            href="/sitetoni/about"
            className="flex flex-col items-center gap-1 hover:shadow-md"
          >
            <p>DESPRE NOI</p>
          </a>
          <a
            href="/sitetoni/contact"
            className="flex flex-col items-center gap-1 hover:shadow-md"
          >
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

          {/* Menu Icon (pentru mobil) */}
          <img
            src={assets.menu_icon.src}
            alt="menu"
            className="w-5 cursor-pointer sm:hidden hover:shadow-md"
            onClick={() => setVisible(!visible)}
          />
        </div>

        {/* Cart Icon */}
        <a href="/sitetoni/cart" className="relative hover:shadow-md">
          <img src={assets.cart_icon.src} alt="cart" className="w-7 min-w-7" />
          <p className="absolute right-[-12px] bottom-[-6px] w-5 text-center leading-4 bg-black! text-white aspect-square rounded-full text-[14px] hover:shadow-md">
            {cartData.length}
          </p>
        </a>
      </div>

      {/* Sidebar pentru Mobile */}
      <div
        className={`absolute top-0 right-0 bg-white ease-in duration-350 overflow-hidden border-t-2 border-b-2 border-[#0ac0ac] rounded-lg
      ${visible ? "w-full" : "w-0"}`}
      >
        <div className="flex flex-col text-black mb-10">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <div className="flex justify-normal">
              <MdArrowBackIos className="h-4" color="black" /> <span>Înapoi</span>
            </div>
            {/* <img
              src={assets.dropdown_icon.src}
              alt="close"
              className="h-4 rotate-180"
            /> */}
            {/* <p className="font-semibold">Înapoi</p> */}
          </div>
          <a
            onClick={() => {
              setVisible(false);
              setCurrentPage(1);
            }}
            className={`py-2 pl-6 border border-[#0ac0ac] rounded-lg hover:shadow-md ${currentPage == 1 ? "bg-[#0ac0ac]": "" }`}
            href="/sitetoni"
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
            onClick={() => {
              setVisible(false);
              setCurrentPage(2);
            }}
            className={`py-2 pl-6 border border-[#0ac0ac] rounded-lg hover:shadow-md ${currentPage == 2 ? "bg-[#0ac0ac]": "" }`}
            href="/sitetoni/about"
          >
            DESPRE NOI
          </a>
          <a
            onClick={() => {
              setVisible(false);
              setCurrentPage(3);
            }}
            className={`py-2 pl-6 border border-[#0ac0ac] rounded-lg hover:shadow-md ${currentPage == 3 ? "bg-[#0ac0ac]": "" }`}
            href="/sitetoni/contact"
          >
            CONTACT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
