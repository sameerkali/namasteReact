import React, { useEffect, useState } from "react";
import "./styles.css";
import Card from "../Others/Card";
import { SearchIcon } from "lucide-react";

const Api_url = process.env.Game_api_key;

const filterData = (searchText, gameData) => {
  return searchText.length === ""
    ? gameData
    : gameData.filter((game) =>
        game.name.toLowerCase().includes(searchText.toLowerCase())
      );
};

const Body = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api();
  }, []);

  const api = async () => {
    const response = await fetch(Api_url);
    const data = await response.json();
    console.log(data.results);
    setGames(data.results);
  };

  const handleSearch = () => {
    const filteredData = filterData(search, games);
    setFilteredGames(filteredData);
  };

  return (
    <>
      {/* search bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a game..."
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

      {/* Body */}
      <div className="container-body">
        {filteredGames.length === 0 && search.length === 0 ? (
          <h1>No result found</h1>
        ) : (
          filteredGames.map((game) => (
            <Card
              key={game.id}
              name={game.name}
              image={game.background_image}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Body;
