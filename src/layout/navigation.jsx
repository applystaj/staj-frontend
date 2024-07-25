import React, { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("All Categories");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="h-16 bg-gray-200 flex items-center justify-center">
      <div className="flex flex-row items-center space-x-4">
        <div className="relative inline-block">
          <button
            onClick={toggleDropdown}
            className="bg-gray-100 border border-gray-300 p-2 cursor-pointer"
          >
            {selectedItem} <span>{isOpen ? "▲" : "▼"}</span>
          </button>
          {isOpen && (
            <ul className="absolute bg-white border border-gray-300 list-none p-0 m-0 w-full z-20">
              <li
                onClick={() => handleItemClick("Man")}
                className="p-2 cursor-pointer hover:bg-gray-100"
              >
                Man
              </li>
              <li
                onClick={() => handleItemClick("Women")}
                className="p-2 cursor-pointer hover:bg-gray-100"
              >
                Women
              </li>
              <li
                onClick={() => handleItemClick("Kids")}
                className="p-2 cursor-pointer hover:bg-gray-100"
              >
                Kids
              </li>
            </ul>
          )}
        </div>
        <button className="mx-2">Fashion</button>
        <button className="mx-2">SuperMarket</button>
        <button className="mx-2">Electronics</button>
        <button className="mx-2">Fitness and Sport</button>
        <button className="mx-2">Clothing</button>
        <button className="mx-2">Furnitures</button>
      </div>
    </div>
  );
};

export default Navigation;
