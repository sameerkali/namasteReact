import React from "react";
import "./Search.css";
import {SearchCodeIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        aria-label="Search"
      />
      <button className="search-button" aria-label="Search Button">
        <SearchCodeIcon/>
      </button>
    </div>
  );
};

export default Search;
