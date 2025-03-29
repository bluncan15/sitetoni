import { useState, useEffect } from "react";

import { assets } from "../assets/assets";
import { images } from "../assets/gallery";
import { suppliers } from "../assets/constants";
import Slider from "./Slider";

// const GalleryComponent = () => {
//   const [imgIdx, setImgIdx] = useState(0);
//   const [fadeClass, setFadeClass] = useState('fade-in');

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFadeClass('fade-out'); // Aplicați efectul de fade-out
//       setTimeout(() => {
//         setImgIdx(prev => (prev === images.length - 1 ? 0 : prev + 1));
//         setFadeClass('fade-in');
//       }, 500);
//     }, 5 * 1000);

//     return () => clearInterval(interval); // Curățarea intervalului la dezmembrarea componentului
//   }, []);

//   return (
//     <div className="border-2 rounded-lg mt-4 border-[#0ac0ac]">
//       <img
//         className={`w-256 h-128 rounded-lg ${fadeClass}`} // Adaugă efectul de fade
//         src={images[imgIdx].src}
//         alt="Gallery"
//       />
//     </div>
//   );
// };

const Preview = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 md:gap-24">
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-4xl">
              FURNIZORII NOȘTRII
            </p>
          </div>
          <div className="flex items-center gap-8 md:gap-32 py-6 mt-2">
            {suppliers.map((supplier, key) => (
              <a key={key} href={supplier.website}>
                <img className="w-64 cursor-pointer" src={supplier.logo} />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 py-2 md:py-6">
            <a className="pointer-cursor" href="/contact">
              <p className="font-semibold text-sm md:text-2xl ">
                CONTACTEAZĂ-NE ACUM
              </p>
            </a>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center md:mt-8">
        <p className="font-semibold text-sm md:text-2xl text-[#414141]">
          PROIECTELE NOASTRE
        </p>
        <Slider client:load />
      </div>
    </div>
  );
};

export default Preview;
