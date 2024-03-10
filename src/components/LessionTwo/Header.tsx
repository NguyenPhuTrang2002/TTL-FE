import React, { useState } from 'react';
import Dropdown from './Dropdown';

const Header = () => {
  const dataDropdown = [
    {
      label: 'SORT BY',
      option: [
        {
          title: 'Useless first',
        },
        {
          title: 'Useless second',
        },
      ],
    },
    {
      label: 'Condition',
      option: [
        {
          title: 'New',
        },
        {
          title: 'Old',
        },
      ],
    },
    {
      label: 'Delivery options',
      option: [
        {
          title: 'Express delivery',
        },
        {
          title: 'Fast delivery',
        },
      ],
    },
  ];
  const [isShowMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="w-full flex flex-col md:flex-row sm:flex-col lg:gap-4 md:gap-4 items-center justify-between px-4 pt-4 pb-10">
      <ul className="flex item-center sm:gap-4 md:gap-0 lg:order-1 md:order-2 sm:order-2">
        {dataDropdown.map((dropdown, index) => (
          <li key={index} className="border-[1px] border-solid border-[#B4B4BB] rounded-[4px] space-x-2 flex items-center justify-center pl-4 ml-4 pr-[12px] py-[7px] relative group">
            <p className="text-[14px] font-[400] leading-[20px] text-[#5A5B6A] select-none">{dropdown.option[0].title}</p>
            <img src="./icons/iconheader.svg" alt="" />
          </li>
        ))}
      </ul>
      <div className="flex item-center justify-between lg:order-2 md:order-2 sm:order-1 sm:mb-4 md:mb-0 lg:mb-0 sm:justify-end sm:relative sm:w-full md:w-auto">
        <ul className="mr-4 lg:flex items-center md:hidden sm:hidden">
          <li className="flex items-center justify-center bg-[#EBF2FF] py-2 px-4 rounded cursor-pointer">
            <p className="text-[14px] font-[400] leading-[20px] text-[#5A5B6A] select-none">Show all</p>
          </li>
          <li className="flex items-center justify-center bg-[#fff] py-2 px-4 rounded cursor-pointer border-[1px] border-[#fff] box-shadow">
            <p className="text-[14px] font-[400] leading-[20px] text-[#2264D1] select-none">Auction</p>
          </li>
          <li className="flex items-center justify-center bg-[#EBF2FF] py-2 px-4 rounded cursor-pointer">
            <p className="text-[14px] font-[400] leading-[20px] text-[#5A5B6A] select-none">Buy now</p>
          </li>
        </ul>
        <ul className="items-center sm:hidden md:flex lg:flex">
          <li className="flex items-center justify-center bg-[#EBF2FF] py-1 px-5 rounded select-none cursor-pointer">
            <div className="w-[28px h-[28px] flex items-center justify-center">
              <img src="./icons/iconheader2.svg" alt="" />
            </div>
          </li>
          <li className="flex items-center justify-center bg-[#fff] py-1 px-5 rounded border-[1px]  select-none cursor-pointer border-[#fff] box-shadow">
            <div className="w-[28px h-[28px] flex items-center justify-center">
              <img src="./icons/iconheader3.svg" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
