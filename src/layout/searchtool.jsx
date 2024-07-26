import React, { useState } from "react";

const SearchTool = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log("Aranan Terim:", searchTerm);
  };

  return (
    <div className="flex items-center p-2 border border-gray-400 rounded bg-gray-100">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
        className="p-1 text-lg border border-gray-400 rounded bg-white"
      />
      <button
        onClick={handleSearch}
        className="ml-2 p-1 text-lg cursor-pointer border border-black rounded bg-gray-300 hover:bg-gray-400"
      >
        Search
      </button>
    </div>
  );
};

export default SearchTool;
