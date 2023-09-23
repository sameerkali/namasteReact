import React, { useState } from "react";
import "./Search.css";
import { SearchIcon } from "lucide-react";

const Search = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]); // Array to store the search results

  const handleSearch = (e) => {
    const query = search;
    setResults([{ name: "Result 1" }, { name: "Result 2" }]);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        aria-label="Search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        className="search-button"
        aria-label="Search Button"
        onClick={handleSearch}
      >
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
