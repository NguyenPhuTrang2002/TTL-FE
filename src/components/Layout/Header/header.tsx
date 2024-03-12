import React, { useEffect, useState } from "react";
import ListItem from "./listItem";
import { useSelector } from "react-redux";
import { localStorageAuthService } from "../../../features/common/storages";
import { useUserStore } from "../../../features/auth/stores";
import { logout } from "../../../plugins/axios";

const Header = () => {
  const ArrayList = [
    {
      icon: (
        <img src="./icons/icon1.svg" alt="Bag" />
      ),
      title: "Clothing & Shoes",
    },
    {
      icon: (
        <img src="./icons/icon2.svg" alt="Bag" />
      ),
      title: "Entertainment",
    },
    {
      icon: (
        <img src="./icons/icon3.svg" alt="Bag" />
      ),
      title: "Music",
    },
    {
      icon: (
        <img src="./icons/icon4.svg" alt="Bag" />
      ),
      title: "Sport & Lifestyle",
    },
    {
      icon: (
        <img src="./icons/icon5.svg" alt="Bag" />
      ),
      title: "Pets",
    },
    {
      icon: (
        <img src="./icons/icon6.svg" alt="Bag" />
      ),
      title: "Kitchen Accessories",
    },
    {
      icon: (
        <img src="./icons/icon7.svg" alt="Bag" />
      ),
      title: "Travel Equipment",
    },
    {
      icon: (
        <img src="./icons/icon8.svg" alt="Bag" />
      ),
      title: "Growing & Garden",
    },
    {
      icon: (
        <img src="./icons/icon9.svg" alt="Bag" />
      ),
      title: "Electrical Tools",
    },
    {
      icon: (
        <img src="./icons/icon10.svg" alt="Bag" />
      ),
      title: "Mother Care",
    },
    {
      icon: (
        <img src="./icons/icon11.svg" alt="Bag" />
      ),
      title: "Toys & Entertainment",
    },
  ];
  const { _getOwnProfile } = useUserStore();
  const access_token = localStorageAuthService.getAccessToken();
  useEffect(() => {
    _getOwnProfile({
      access_token: access_token
    });
  }, []);

  const avatar = useSelector((state: any) => state.avatar);
  const email = useSelector((state: any) => state.email);

  const [avtOptions, setAvtOptions] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const handleAvtClick = () => {
    setAvtOptions(!avtOptions);
  };
  const handleSubmit = () => {
    setShowConfirm(true);
  };
  const handleLogout = () => {
    setShowConfirm(false);
    logout();
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between ">
            <img src="./icons/logo.svg" alt="Logo" />
            <button className="ml-[38px] text-[#5A5B6A]">Sell on Shopka</button>
            <button className="ml-[38px] text-[#5A5B6A]">Register</button>
          </div>

          <div className="flex items-center">
            <div className="flex items-center bg-gray-100 rounded-3xl justify-center">
              <img className="mx-3" src="./icons/search.svg" alt="Search" />
              <input className="outline-none bg-gray-100 h-[48px] w-[350px] placeholder-[#19191D]" placeholder="useless items on white background" />
              <img className="mx-3" src="./icons/close.svg" alt="Close" />
            </div>
            <div>
              <p className="ml-[38px] text-[#2264D1] text-20">Consumer Electronics</p>
            </div>
          </div>
          <div className="flex items-center">
            <button className="w-[104px] h-10 text-[#2264D1] font-bold  rounded-md border border-solid border-blue-300">Sign in</button>
            <div className="relative">
              <button className="w-[104px] h-10 rounded-md text-14 font-bold leading-20 text-[#2264D1] select-none ml-4 cursor-pointer border-[1px] border-[#fff] box-shadow">
                My cart
              </button>
              <span className="absolute top-2 right-2 transform translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 pb-0.5 text-[#fff] bg-[#EA5455] rounded-xl">
                5
              </span>
            </div>
            <div className="px-3 group">
              <div className="h-[50px] flex justify-center items-center">
                <img className="cursor-pointer mr-1 rounded-3xl w-[38px] h-[38px] group" src={avatar} alt="Avatar" />
              </div>
              <div
                className="hidden group-hover:flex absolute right-0 z-10 w-[165px] rounded-md bg-[#0F60FF] flex-col justify-center items-center space-y-2 p-4 mt-[10px] mr-8
            after:content-[''] after:h-[10px] after:w-[10px] after:z-20 after:border-l-[20px] after:border-l-transparent after:border-solid after:border-b-[20px] 
            after:border-r-[20px] after:border-r-transparent after:border-b-[#0F60FF] after:top-[-10px] after:right-[0px] after:absolute
            ">
                <p className="text-gray-300">{email}</p>
                <p className="text-white hover:text-gray-300 cursor-pointer">Thông tin</p>
                <p className="text-white hover:text-gray-300 cursor-pointer">Cài đặt</p>
                <p onClick={handleSubmit} className="text-white hover:text-gray-300 cursor-pointer">Đăng xuất</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center px-[60px] py-4">
          {ArrayList.map((item, index) => (
            <ListItem key={index} icon={item.icon} title={item.title} />
          ))}
        </div>
        {showConfirm && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg">
              <p className="text-xl">Bạn có chắc chắn muốn đăng xuất tài khoản ?</p>
              <div className="flex justify-between mt-5">
                <button className="px-4 py-2 bg-gray-300 rounded-md" onClick={() => setShowConfirm(false)}>Hủy</button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={handleLogout}>Đăng xuất</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
