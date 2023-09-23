import React from "react";
import "./styles.css";
import Card from "../Others/Card";
import { useEffect, useState } from "react";
const Api_url =
  "https://api.rawg.io/api/games?key=3e49c7b55bf4452bac85435423b53726";

const Body = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    api();
  }, []);

  const api = async () => {
    const response = await fetch(Api_url);
    const data = await response.json();
    console.log(data.results);
    setGames(data.results);
  };

  return (
    <>
      <div className="container-body">
        {games.map((games) => {
          return <Card name={games.name} image={games.background_image} />;
        })}
      </div>
    </>
  );
};

export default Body;
