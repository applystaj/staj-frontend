import React, { useState } from "react";
import logo from "../header/logola.png";
import shopping from "../header/shopping.png";
import person from "../header/person.png";
import heart from "../header/heart.png";
import SearchTool from "./SearchTool";

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
    <div className="h-10vh bg-white flex justify-evenly items-stretch">
      <div className="flex flex-0.5 items-center">
        <img
          src={logo}
          alt="logo"
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <SearchTool />
      <div className="flex items-center">
        <img
          src={shopping}
          alt="shopping"
          className="mx-2 max-h-1/4 max-w-1/4 object-contain"
        />
        <img
          src={heart}
          alt="heart"
          className="mx-2 max-h-1/4 max-w-1/4 object-contain"
        />
        <img
          src={person}
          alt="person"
          className="mx-2 max-h-1/4 max-w-1/4 object-contain"
        />
        <nav className="flex">
          <ul className="list-none flex p-0 m-0">
            <li className="ml-2 text-blue-500 first:ml-0">Sign in / Join</li>
          </ul>
          <button
            onClick={toggleDropdown}
            className="bg-blue-500 py-1 px-8 border-none cursor-pointer"
          >
            {selectedItem} <span>{isOpen ? "▲" : "▼"}</span>
          </button>
          {isOpen && (
            <ul className="absolute bg-white border border-gray-300 list-none p-0 m-0 w-full z-10">
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
