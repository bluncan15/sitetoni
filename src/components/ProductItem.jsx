// import PropTypes from 'prop-types';
import { useContext } from "react";
import PriceTableComponent from "./PriceTableComponent";
import Title from './Title';

const ProductItem = ({ product }) => {
  return (
    <div className="text-gray-700">
      <div className="border-[#0ac0ac] overflow-hidden border rounded-lg p-4 shadow-sm h-[710px]">
        <a href={`/sitetoni/product/${product._id}`} className="cursoir-pointer">
          <img
            src={product.images[0]}
            alt={product._id}
            className="w-full h-64 object-cover mb-2 rounded hover:scale-110 transition ease-in-out duration-500 "
          />
        </a>
        <div className="flex justify-center">
          <p className="pt-3 pb-1 text-l">{product.name}</p>
        </div>
        <PriceTableComponent product={product} />
      </div>
    </div>
  );
};

export default ProductItem;
