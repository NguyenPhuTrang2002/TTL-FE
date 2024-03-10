import React, { useEffect, useState } from "react";
import Product from "./ListProduct";
import Header from "./Header";
import { ProductsData } from "../../data";

interface Props {
  ListProduct: any;
}

interface ProductArray {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  pionte: string;
}
const Index = ({
  ListProduct
}: Props) => {
  // const [ArrayProduct, setArrayProduct] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost:5000/api/products')
  //     .then(res => res.json())
  //     .then(res => setArrayProduct(res))
  //     .catch(err => console.error(err))
  // }, [])

  const [ListProductArray, setListProductArray] = useState<ProductArray[]>([]);
  useEffect(() => {
    setListProductArray(ListProduct);
  }, [ListProduct]);
  return (
    <div className="w-[1115px] mx-auto">
      <Header />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 border-b-1 border-[#EDEDF0] mb-10 rounded-2xl shadow-md">
        {ListProductArray.map((product: ProductArray, index: number) => (
          <Product
            key={index}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
            point={product.pionte}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 md:gap-3 lg:gap-5 xl:gap-5 pb-[100px]">
        <div className="flex flex-col items-center justify-center bg-[#EDEDF0] rounded-lg">
          <img src="./icons/iconheader5.svg" alt="" />
          <h1 className="text-[20px] leading-[30px]">Clear & Usable user flows</h1>
          <p className="text-[14px] leading-[20px] pb-[24px]">Let’s boost your marketplace</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#EDEDF0] rounded-lg">
          <img src="./icons/iconheader6.svg" alt="" />
          <h1 className="text-[20px] leading-[30px]">Fine & Styled components</h1>
          <p className="text-[14px] leading-[20px] pb-[24px]">Speed up with Setproduct templates</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#EDEDF0] rounded-lg">
          <img src="./icons/iconheader7.svg" alt="" />
          <h1 className="text-[20px] leading-[30px]">Customizable & Reusable</h1>
          <p className="text-[14px] leading-[20px] pb-[24px]">Take our UX patterns and rebuild</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
