import React from 'react';

interface ListContentProps {
  icon: JSX.Element;
  title: string;
  content: string;
}

const ListContent = ({ icon, title, content }: ListContentProps) => {
  return (
    <div className="bg-[#fff] py-[35px] px-10">
      <p className="pb-[14px]">{icon}</p>
      <h1 className="text-[#333] fw-400 text-[24px] pb-[9.5px]">{title}</h1>
      <p className="text-4 font-[400] leading-[21px] text-[#555]">{content}</p>
    </div>
  );
};

export default ListContent;
