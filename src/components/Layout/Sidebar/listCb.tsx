import React from 'react';

interface Props {
  title: string;
  icon: JSX.Element;
  options: string[];
}

const ListCb = ({ title, icon, options }: Props) => {
  const [showOptions, setShowOptions] = React.useState(false);
  const [clickCount, setClickCount] = React.useState(0);

  const handleToggleOptions = () => {
    setShowOptions(prevShowOptions => !prevShowOptions);
    setClickCount(prevClickCount => prevClickCount + 1);
  };

  return (
    <div className={`bg-[##FFFFFF] mr-4 my-6 shadow-md rounded-md ${showOptions ? 'bg-[#F7F7FA]' : ''}`}>
      <div className='flex justify-between h-10 items-center px-4' onClick={handleToggleOptions}>
        <h1 className='text-16px text-[#19191D]'>{title}</h1>
        {/* Sử dụng biểu thức điều kiện để thay đổi icon và backgroud */}
        <span className={clickCount % 2 === 0 ? '' : ''}>
          {clickCount % 2 === 0 ? icon : <img src="./icons/arrowtop.svg" alt="Arrow Down" />}
        </span>
      </div>
      {showOptions && (
        <ul className='pt-5'>
          {options.map((option, index) => (
            <li key={index} className='px-6 h-10'>
              <input className='h-[18px] w-[18px]' type="checkbox" id={`option${index}`} name={`option${index}`} />
              <label className='px-3' htmlFor={`option${index}`}>{option}</label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListCb;
