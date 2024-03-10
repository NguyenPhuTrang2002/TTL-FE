import React from 'react';

interface ListItemProps {
  icon: JSX.Element;
  title: string;
  description: string;
  onClick: () => void;
  expanded: boolean;
}

const ListItem = ({ icon, title, description, onClick, expanded }: ListItemProps) => {
  return (
    <div onClick={onClick} className={`cursor-pointer flex items-center h-10 ${expanded ? '' : ''}`}>
      <span className="px-4">{icon}</span>
      <div>
        <h1 className="text-[#19191D] text-4">{title}</h1>
        <p className="text-[#787885] text-[14px]">{description}</p>
      </div>
    </div>
  );
}

export default ListItem;
