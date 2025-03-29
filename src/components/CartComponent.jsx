import { useEffect, useState } from "react";
import Title from "./Title";
import { assets } from "../assets/assets";
import useLazyStore from "../assets/useLazyStore";
import CartTotal from "./CartTotal";
import { useStore } from "@nanostores/react";
import { getCartItems, removeFromCart, $cart } from "../shared/cart";

import {
  get_product_by_id,
  get_thickness_by_id,
  get_color_type_by_id,
  get_color_by_id,
} from "../assets/utils";

const Cart = () => {
  let currency = " RON";
  const [cartItems] = useLazyStore($cart, []);

  const getCartTotal = () => {
    return cartItems.reduce((a, b) => +a + b.price, 0);
  };

  return (
    <div className="pt-14">
      <div className="mb-3 text-2xl">
        <Title text1={"Coșul"} text2={"tău"} />
      </div>

      {cartItems.map((item, index) => {
        let product = get_product_by_id(item._id);
        let color = get_color_by_id(item.color);
        let thickness = get_thickness_by_id(item.thickness);
        let color_type = get_color_type_by_id(item.color_type);

        return (
          <div
            key={index}
            className="py-3 border-[#0ac0ac] border-b border-t text-gray-700 grid  grid-cols-[3fr_0.5fr_0.5fr] sm:grid-cols-[3fr_1fr_0.5fr] items-center gap-4"
          >
            <div className="flex items-start gap-2 md:gap-6">
              <img src={product.images[0]} alt="" className="w-16 sm:w-20" />
              <div>
                <p className="text-sm sm:text-lg font-medium">{product.name}</p>

                <div className="flex items-center gap-3 mt-2">
                  <p className="px-2 sm:px-3 sm:py-1 border border-[#0ac0ac] bg-slate-50 text-[10px] md:text-xl">
                    {thickness.value} mm
                  </p>
                  <p className="px-2 sm:px-3 sm:py-1 border border-[#0ac0ac] bg-slate-50 uppercase text-[10px] md:text-xl">
                    {color_type.name}
                  </p>
                  <p
                    className="px-2 sm:px-3 sm:py-1 border border-[#0ac0ac] bg-slate-50 text-[10px] md:text-xl text-white"
                    style={{ backgroundColor: color.color }}
                  >
                    {color.name}
                  </p>
                </div>
              </div>
            </div>
            <img
              onClick={() => {
                removeFromCart(index);
              }}
              src={assets.bin_icon.src}
              alt=""
              className="w-4 mr-4 sm:w-5 cursor-pointer"
            />
            <p className="">
              {item.price} {} RON
            </p>
          </div>
        );
      })}

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal total={getCartTotal()} />

          <div className="w-full text-end">
            <button className="my-8 px-8 py-3 bg-[#0ac0ac] text-black text-sm cursor-pointer">
              CERE OFERTĂ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
