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
        <div className="text-black">
          <div className="flex justify-center items-center">
            <p className="font-medium text-sm md:text-4xl border-t-2 rounded-lg border-[#0ac0ac]">
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
          <div className="flex justify-center items-center md:py-6 gap-2 md:gap-24">
            <a className="pointer-cursor" href="/sitetoni/contact">
              <p className="font-medium text-sm md:text-4xl border-b-2 border-t-2 rounded-lg border-[#0ac0ac] hover:shadow-2xl fancy-blink">
                CONTACTEAZĂ-NE ACUM
              </p>
            </a>
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
