import React, { useEffect, useState } from "react";
import "./styles.css";
import Card from "../Others/Card";
import Shimmer from '../Others/shimmar'

const Api_url = process.env.Game_api_key;

const Body = () => {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    api();
  }, []);

  const api = async () => {
    const response = await fetch(Api_url);
    const data = await response.json();
    setGames(data.results);
    setSearch(data.results);
    setLoading(false)
  };

  const searchGame = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setSearch(null);
      setLoading(true)
    }
    const searchFilter = games?.filter((s) =>
      s.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearch(searchFilter);
  };

 if(loading){
  return <Shimmer/>
 }

  return (
    <>
      {/* search bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a game..."
          aria-label="Search"
          onChange={searchGame}
        />
      </div>

      {/* Body */}
      <div className="container-body">
        {search.map(({id, name, background_image}) => (
          <Card key={id} name={name} image={background_image} />
        ))}
      </div>
    </>
  );
};

export default Body;
