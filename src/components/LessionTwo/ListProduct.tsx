import React from "react";

interface ProductProps {

  name: string;
  price: string;
  description: string;
  image: string;
  point: string;
}
const formatPrice = (price: string) => {
  let priceString = price.toString();
  let parts = priceString.split('.');
  let integerPart = parts[0];
  let decimalPart = parts.length > 1 ? `.${parts[1]}` : '';
  let formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  let formattedPrice = formattedIntegerPart + decimalPart;
  return formattedPrice;
}
const Product = ({ name, price, description, image, point }: ProductProps) => {
  return (
    <div className="h-[472px] w-[259px] rounded-md flex flex-col hover:shadow-xl p-4">
      <div className="flex items-center w-full justify-center">
        <img className="w-[227px] h-[224px] rounded-md" src={image} alt="Product" />
      </div>
      <p className="text-[16px] py-3 font-medium line-clamp-3 overflow-hidden">{name}</p>
      <p className="text-[24px] font-bold py-3">${formatPrice(price)}</p>
      <p className="text-[14px] text-[rgb(120,120,133)] flex-1">{description}</p>
      <div className="flex space-x-3 items-center justify-center">
        <div className="flex space-x-1 items-center">
          <img src="./icons/iconheader8.svg" alt="" />
          <img src="./icons/iconheader9.svg" alt="" />
          <img src="./icons/iconheader10.svg" alt="" />
          <img src="./icons/iconheader11.svg" alt="" />
          <img src="./icons/header12.svg" alt="" />
        </div>
        <div>
          <p className="">4.99</p>
        </div>
        <p className="text-[14px] font-[400]">{point}</p>
        <div className="flex h-[32px] w-[100px] space-x-2 text-[14px] border border-solid border-[#9DC2FF] justify-center items-center">
          <img src="./icons/iconheader12a.svg" alt="" />
          <p className="">watch</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
