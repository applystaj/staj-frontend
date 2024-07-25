import React, { useState } from "react";

const SearchTool = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Arama işlemini gerçekleştirin
    console.log("Aranan Terim:", searchTerm);
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
        className="p-1 text-lg"
      />
      <button
        onClick={handleSearch}
        className="ml-2 p-1 text-lg cursor-pointer"
      >
        Search
      </button>
    </div>
  );
};

export default SearchTool;
