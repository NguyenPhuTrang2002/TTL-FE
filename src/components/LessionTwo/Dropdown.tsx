import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { conditionSort, deliverySort, sortData, uselessSort } from '../../actions/sortData';
import { ProductsData } from '../../data';

interface Option {
  title: string;
}

const Dropdown: React.FC<{ label: string; option: Option[] }> = ({ label, option }) => {
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(label);

  const handleToggle = () => setActive(true);

  const delivery = useSelector((state: any) => state.sort.delivery);
  const useless = useSelector((state: any) => state.sort.useless);
  const condition = useSelector((state: any) => state.sort.condition);

  const dataProducts = useSelector((state: any) => state.sort.data);

  useEffect(() => {
    let sortedProducts = [...ProductsData];

    if (delivery) {
      sortedProducts = sortedProducts.filter((product: any) => product.delivery === delivery);
    }

    if (useless) {
      sortedProducts = sortedProducts.filter((product: any) => product.useless === useless);
    }

    if (condition) {
      sortedProducts = sortedProducts.filter((product: any) => product.condition === condition);
    }

    const hasChanged = JSON.stringify(sortedProducts) !== JSON.stringify(dataProducts);

    if (hasChanged) {
      dispatch(sortData(sortedProducts));
    }
  }, [delivery, useless, condition, dataProducts, dispatch]);


  const handleItemClick = (title: string, index: number) => {
    setSelectedLabel(option[index].title);
    switch (label) {
      case 'Delivery options':
        dispatch(deliverySort(title));
        break;
      case 'SORT BY':
        dispatch(uselessSort(title));
        break;
      case 'Condition':
        dispatch(conditionSort(title));
        break;
      default:
        break;
    }
  };

  return (
    <div className='border-[1px] border-solid border-[#B4B4BB] rounded-[4px] flex flex-col items-center justify-center pl-4 pr-[12px] py-[7px] relative group'>
      <button
        className='flex items-center justify-center select-none'>
        <p className={`text-[14px] font-[500] leading-5 mr-1 ${selectedLabel !== label ? 'text-[#19191D]' : 'text-[#787885]'}`}>{selectedLabel}</p>
        <div className='flex items-center justify-center w-[24px] h-[24px]'>
          <img src="./icons/dropdown.svg" alt="" />
        </div>
      </button>
      <ul className={`w-full flex-col gap-1 absolute top-[100%] left-0 border-[1px] bg-[#fff] z-10 border-solid border-[#B4B4BB] rounded-[4px] hidden group-hover:flex`}>
        {
          option.map((item, index) => {
            return (
              <li
                onClick={() => {
                  handleToggle();
                  handleItemClick(item.title, index);
                }}
                key={index}
                className='px-4 py-2 cursor-pointer hover:bg-slate-300 text-[14px] font-[500] text-[#19191D] leading-5'>
                {item.title}
              </li>
            )
          })
        }
      </ul>
      <span
        className={`absolute top-[-10px] sort-custom-animation left-[12px] text-[500] text-[10px] text-[#787885] bg-[#fff] px-1 leading-4 ${active ? 'block' : 'hidden'}`}>
        {label}
      </span>
    </div>
  );
};

export default Dropdown;