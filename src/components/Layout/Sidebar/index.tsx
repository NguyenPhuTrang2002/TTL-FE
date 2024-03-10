import React, { useState } from 'react';
import ListItem from './listItem';
import ListCb from './listCb';

const Sidebar = () => {
  const [items, setItems] = useState([
    {
      icon: <img src="./icons/arrowright.svg" alt="Arrow" />,
      expandedIcon: <img src="./icons/arrowdown.svg" alt="Arrow Down" />,
      title: 'All categories',
      description: 'Ecommerce pattern',
      children: ['Electronic', 'Fashion', 'Home & Garden'],
      expanded: false,
    },
    {
      icon: <img src="./icons/arrowright.svg" alt="Arrow" />,
      expandedIcon: <img src="./icons/arrowdown.svg" alt="Arrow Down" />,
      title: 'Electronics',
      description: '',
      children: ['Smartphones', 'TVs', 'Cameras'],
      expanded: false,
    },
    {
      icon: <img src="./icons/arrowright.svg" alt="Arrow" />,
      expandedIcon: <img src="./icons/arrowdown.svg" alt="Arrow Down" />,
      title: 'Business & industrial',
      description: '',
      children: ['Office Supplies', 'Industrial Equipment', 'Restaurant & Food Service'],
      expanded: false,
    },
    {
      icon: <img src="./icons/arrowright.svg" alt="Arrow" />,
      expandedIcon: <img src="./icons/arrowdown.svg" alt="Arrow Down" />,
      title: 'Computers',
      description: 'Tablets & Networking',
      children: ['Laptops', 'Desktops', 'Computer Components'],
      expanded: false,
    },
    {
      icon: <img src="./icons/arrowright.svg" alt="Arrow" />,
      expandedIcon: <img src="./icons/arrowdown.svg" alt="Arrow Down" />,
      title: 'Consumer Electronics',
      description: '',
      children: ['Headphones', 'Speakers', 'Wearable Technology'],
      expanded: false,
    },
    {
      icon: <img src="./icons/arrowright.svg" alt="Arrow" />,
      expandedIcon: <img src="./icons/arrowdown.svg" alt="Arrow Down" />,
      title: 'Home & Garden',
      description: '',
      children: ['Furniture', 'Appliances', 'Home Décor'],
      expanded: false,
    },
    {
      icon: <img src="./icons/arrowright.svg" alt="Arrow" />,
      expandedIcon: <img src="./icons/arrowdown.svg" alt="Arrow Down" />,
      title: 'Collectibles',
      description: '',
      children: ['Coins & Paper Money', 'Stamps', 'Trading Cards'],
      expanded: false,
    },
  ]);

  const ArrayList = [
    {
      title: "Collapsed filters",
      icon: <img src="./icons/arrowdown.svg" alt="Arrow Down" />,
      options: ['Price', 'Color', 'Size']
    },
    {
      title: "Expanded Filters",
      icon: <img src="./icons/arrowdown.svg" alt="Arrow Down" />,
      options: ['Recommended', 'Recently Added', 'Expiring Soon', 'Most Rated', 'Price: Low → High', 'Price: High → Low']
    },
    {
      title: "Year of manufacturing",
      icon: <img src="./icons/arrowdown.svg" alt="Arrow Down" />,
      options: ['1954', '1955', '1956', '1957', '1958', '1959', '1960', '1961', '1962-2020']
    },
  ];

  const handleToggleItem = (index: number) => {
    setItems(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems[index] = {
        ...updatedItems[index],
        expanded: !updatedItems[index].expanded,
      };
      return updatedItems;
    });
  };

  return (
    <div className="h-full w-[270px] sidebar">
      <div className="sidebar-header">
        <div className='justify-between flex items-center w-[250px] h-[50px] rounded-md border border-blue-300 bg-white mt-2 px-3 mb-10'>
          <img src="./icons/vector.svg" alt="Vector" />
          <img src="./icons/departments.svg" alt="Logo" />
        </div>
      </div>
      {items.map((item, index) => (
        <div key={index}>
          <ListItem
            icon={item.expanded ? item.expandedIcon : item.icon}
            title={item.title}
            description={item.description}
            onClick={() => handleToggleItem(index)}
            expanded={item.expanded}
          />
          {item.expanded && (
            <ul className='py-3'>
              {item.children.map((child, childIndex) => (
                <li className='flex items-center px-5' key={childIndex}>
                  <img className='px-3' src="./icons/arrowright.svg" alt="Arrow" />
                  <span>{child}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      <div className='className="border rounded-md bg-blue-200 w-[75px] h-10 flex justify-center items-center mx-10'>
        <img src="./icons/Expand.svg" alt="" />
      </div>
      {ArrayList.map((item, index) => (
        <ListCb key={index} title={item.title} icon={item.icon} options={item.options} />
      ))}
    </div>
  );
};

export default Sidebar;
