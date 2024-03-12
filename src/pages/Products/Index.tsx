import React, { useEffect, useState } from 'react';
import Index from "../../components/LessionTwo/Index";
import Header from "../../components/Layout/Header/header";
import { ProductApi } from '../../features/api';
import Sidebar from '../../components/Layout/Sidebar';
import Loading from '../../components/Loading';
const Products = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productApi = ProductApi();
        const res = await productApi.getAllProducts({
          limit: 100,
        });
        console.log(res.data.totalItems);
        setProducts(res.data.items);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="w-screen h-screen overflow-y-auto bg-white flex flex-col">
      <div className="flex-grow flex flex-col justify-center items-center">
        <Header />
        <div className="flex justify-center">
          <div className="flex justify-center">
            <Sidebar />
          </div>
          <div className="flex-auto">
            <div className="w-[1115px] min-h-screen flex justify-center">
              {loading ? (
                <Loading />
              ) : (
                <Index ListProduct={products} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
