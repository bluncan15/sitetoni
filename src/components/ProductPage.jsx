import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { products } from "../assets/constants";
import {
  get_color_types,
  get_colors_with_type,
  get_thicknesses,
} from "../assets/utils";
import PriceTableComponent from "./PriceTableComponent";
import { addToCart } from "../shared/cart";
// import { useStore } from '@nanostores/react';

const Product = ({ productId }) => {
  const [productsData, setProductsData] = useState(null);
  const [image, setImage] = useState("");
  const [selectedThickness, setThickness] = useState(1);
  const [selectedColor, setColor] = useState(1);
  const [selectedColorType, setColorType] = useState(1);
  const [showPriceTable, setShowPriceTable] = useState(false);

  const priceTable = (
    <div>
      <p
        className="my-2 text-normal md:text-xl flex items-center cursor-pointer gap-2"
        onClick={() => {
          setShowPriceTable(!showPriceTable);
        }}
      >
        Tabelă prețuri
        <img
          src={assets.dropdown_icon.src}
          alt=""
          className={`h-3 sm:hidden ${showPriceTable ? "rotate-90" : ""}`}
        />
      </p>
      <div className={`${showPriceTable ? "" : "hidden"} md:block`}>
        <PriceTableComponent product={productsData} />
      </div>
    </div>
  );

  const fetchProductsData = async () => {
    products.map((product) => {
      if (product._id === productId) {
        setProductsData(product);
        setImage(product.images[0]);
        return;
      }
    });
  };

  useEffect(() => {
    fetchProductsData();
  }, [productId, products]);

  const getCurrentPrice = () => {
    let price = productsData.prices
      .filter((p) => p.thickness_id == selectedThickness)
      .filter((p) => p.color_type.includes(selectedColorType));
    return price[0]?.price;
  };

  const addProductToCart = () => {
    let p = {
      _id: productsData._id,
      color_type: selectedColorType,
      color: selectedColor,
      thickness: selectedThickness,
      price: getCurrentPrice(),
      quantity: 1,
    };
    addToCart(p);
  };

  return productsData ? (
    <div className="pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* ---------------------- Producsts Data ----------------------*/}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* ---------------------- products images ---------------------- */}

        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row ">
          {/* ---------------------- List images ----------------------*/}
          <div className="flex sm:flex-col  overflow-x-auto sm:overflow-y-scroll justify-between  sm:justify-normal sm:w-[18.7%] w-full">
            {productsData.images.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={item.name}
                onClick={() => setImage(item)}
                className="cursor-pointer w-[24%]  sm:w-full sm:mb-3 flex-shrink-0  object-cover"
              />
            ))}
          </div>

          {/*---------------------- main img---------------------- */}
          <div className="w-full sm:w-[80%]">
            <img
              src={image}
              alt="product"
              className="w-full h-auto object-cover"
            />

            <div className="hidden md:block">
              { priceTable }
            </div>
          </div>
        </div>

        {/* ---------------------- products details ---------------------- */}

        <div className="block md:hidden">
          { priceTable }
        </div>

        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productsData.name}</h1>
          <p className="mt-5 text-3xl font-medium">
            {getCurrentPrice()
              ? "De la " + getCurrentPrice() + " RON / mp"
              : ""}
          </p>
          <p className="mt-5 text-black md:w-4/5 ">
            {productsData.description}
          </p>

          <div className="flex flex-col gap-4 my-8">
            <p className="">Grosimi disponibile</p>
            <div className="flex gap-2">
              {get_thicknesses(productsData.thicknesses).map(
                (thickness, index) => (
                  <button
                    key={thickness._id}
                    onClick={() => {
                      setThickness(thickness._id);
                    }}
                    className={`cursor-pointer mb-6 p-4 rounded-lg border-b-4 ${
                      selectedThickness == thickness._id
                        ? " border-[#0ac0ac] font-bold"
                        : " border-gray-300"
                    }`}
                  >
                    {thickness.value + " mm"}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4 my-8">
            <p className="">Culori disponibile</p>
            {/* Tab-uri */}
            <div className="flex border-b">
              {get_color_types(productsData.color_types).map((type, key) => (
                <div
                  key={key}
                  onClick={() => {
                    setColorType(type._id);
                    setColor(null);
                  }} // Setează tab-ul activ când se dă click pe un tab
                  className={`cursor-pointer py-2 px-4 uppercase ${
                    selectedColorType === type._id
                      ? "border-b-2 border-[#0ac0ac] font-bold"
                      : ""
                  }`}
                >
                  {type.name} {/* Afișează numele tab-ului (cheia) */}
                </div>
              ))}
            </div>

            {/* Conținutul tab-urilor */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
              {get_colors_with_type(selectedColorType)?.map((color, index) => (
                <button
                  onClick={() => {
                    setColor(color._id);
                  }}
                  key={color._id}
                  className={`cursor-pointer mb-6 p-4 rounded-lg border-b-4 ${
                    selectedColor === color._id
                      ? " border-[#0ac0ac] font-bold"
                      : " border-gray-300"
                  }`}
                >
                  <div className="font-bold">{color.name}</div>
                  <div
                    className="mt-2"
                    style={{ backgroundColor: color.color, height: "30px" }}
                  ></div>
                  <div className="text-black">{color.description}</div>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={addProductToCart}
            className="bg-[#0ac0ac] rounded-lg py-3 px-8 text-sm active:bg-gray-700"
          >
            Adaugă în coș
          </button>

          <hr className="border-[#0ac0ac] mt-8 sm:w-4/5" />

          <div className="flex flex-col gap-1 mt-5 text-sm text-black">
            <p>Ceva descriere</p>
            <p>..........</p>
            <p> ......... </p>
          </div>
        </div>
      </div>

      {/* ---------------------- Products Description and review section ----------------------*/}

      <div className="mt-10">
        <div className="flex">
          <b className="px-5 py-3 text-sm border border-[#0ac0ac]">
            Informații
          </b>
        </div>

        <div className=" flex flex-col gap-4 border-[#0ac0ac] px-6 py-6 text-sm text-black ">
          <p> Putem adauga ceva text sau putem sterge ... </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
