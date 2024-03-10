import React from "react";

interface ListItemProps {
  icon: JSX.Element;
  title: string;
}

const ListItem = ({ icon, title }: ListItemProps) => {
  return (
    <div className="bg-[#fff] px-2">
      <p className="flex justify-center items-center">{icon}</p>
      <p className="text-14 font-400 text-555 flex justify-center items-center whitespace-nowrap">{title}</p>
    </div>
  );
};

export default ListItem;
