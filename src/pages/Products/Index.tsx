import React, { useEffect, useState } from 'react';
import Index from "../../components/LessionTwo/Index";
import Header from "../../components/Layout/Header/header";
import { ProductApi } from '../../features/api';
import Sidebar from '../../components/Layout/Sidebar';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productApi = ProductApi();
        const res = await productApi.getAllProducts({
          limit: 100,
        });
        console.log(res.data.totalItems);
        setProducts(res.data.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [limit]);
  return (
    <div className="w-screen h-screen overflow-y-auto bg-white flex flex-col">
      <div className="flex-grow flex flex-col justify-center items-center">
        <Header />
        <div className="flex justify-center">
          <div className="flex-shrink-0 flex justify-center">
            <Sidebar />
          </div>
          <div className="flex-grow">
            <Index ListProduct={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
