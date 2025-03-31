import { assets } from '../assets/assets';
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { CiMail, CiPhone } from 'react-icons/ci';
import { constants } from '../assets/constants';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="f">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div className="">
          <img src={assets.logo.src} alt="" className="mb-5 w-32 " />
          <p className="w-full sm:w-2/3 text-[#0ac0ac]">
            Millenium {} <span className="text-black">Dach Roof </span>
          </p>
        </div>

        <div className="">
          <ul className="flex flex-col flex-1 text-black cursor-pointer">
            <li className="mb-2">
              <a href="/sitetoni/">Acasă</a>
            </li>
            <li className="mb-2">
              <a href="/sitetoni/about/">Despre noi</a>
            </li>
            <li className="mb-2">
              <a href="/sitetoni/contact/">Contact</a>
            </li>
          </ul>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">Contactează-ne</p>
          <ul className="flex flex-col flex-1 text-black gap-0.5">
          <li>
            <div className="flex gap-1">
              <CiPhone color="#0ac0ac"/>
              <a href={'tel:' + constants.PHONE_NUMBER} className="mb-2 cursor-pointer">{constants.PHONE_NUMBER}</a>
            </div>
          </li>
          <li>
            <div className="flex gap-1">
              <CiMail color="#0ac0ac"/>
              <a href={'mailto:' + constants.EMAIL} className="mb-2 cursor-pointer">{constants.EMAIL}</a>
            </div>
          </li>
          <li>
            <div className="flex gap-1">
              <FaWhatsapp />
              <a href='http://whatsapp.com' className="mb-2 cursor-pointer">WhatsApp</a>
            </div>
          </li>
            <div className="flex gap-1">
              <FaFacebook />
              <a href='http://facebook.com' className="mb-2 cursor-pointer">Facebook</a>
            </div>
          <li>
            <div className="flex gap-1">
              <FaInstagram />
              <a href='http://instagram.com' className="mb-2 cursor-pointer">Instagram</a>
            </div>
          </li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="border-[#0ac0ac]"/>
          <p className="py-5 text-sm text-center">
          &copy; 2025 millenniumdachroof.ro. All Rights Reserved.
          </p>
      </div>
    </div>
  );
};

export default Footer;