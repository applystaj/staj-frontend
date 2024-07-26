import React, { useState } from "react";
import logo from "../assets/logola.png";
import shopping from "../assets/shopping.png";
import person from "../assets/person.png";
import heart from "../assets/heart.png";
import SearchTool from "./searchtool";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("My Account");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="h-16 bg-white flex justify-between items-center fixed top-0 w-full z-50 px-4 shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="h-10 object-contain" />
      </div>
      <SearchTool />
      <div className="flex items-center relative">
        <img
          src={shopping}
          alt="shopping"
          className="mx-2 h-8 object-contain"
        />
        <img src={heart} alt="heart" className="mx-2 h-8 object-contain" />
        <img src={person} alt="person" className="mx-2 h-8 object-contain" />
        <nav className="ml-4">
          <ul className="list-none flex p-0 m-0">
            <li className="ml-2 text-blue-500 first:ml-0">Sign in / Join</li>
          </ul>
          <button
            onClick={toggleDropdown}
            className="bg-blue-500 py-1 px-4 border-none cursor-pointer text-white"
          >
            {selectedItem} <span>{isOpen ? "▲" : "▼"}</span>
          </button>
          {isOpen && (
            <ul className="absolute right-0 mt-2 bg-white border border-gray-300 list-none p-0 m-0 w-48 shadow-lg z-50">
              <li
                onClick={() => handleItemClick("Profile")}
                className="p-2 cursor-pointer hover:bg-gray-100"
              >
                Profile
              </li>
              <li
                onClick={() => handleItemClick("Orders")}
                className="p-2 cursor-pointer hover:bg-gray-100"
              >
                Orders
              </li>
              <li
                onClick={() => handleItemClick("Settings")}
                className="p-2 cursor-pointer hover:bg-gray-100"
              >
                Settings
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
