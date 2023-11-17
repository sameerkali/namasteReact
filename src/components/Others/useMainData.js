import { useEffect, useState } from "react";
const key = process.env.api_secret_key;

const useMainData = (page) => {
  const [games, setGames] = useState([]);
  const Api_url = `https://api.rawg.io/api/games?key=${key}&page=${page}`;
  console.log(Api_url);

  useEffect(() => {
    api();
  }, [page]);

  const api = async () => {
    try {
      const response = await fetch(Api_url);
      const data = await response.json();
      setGames(data.results.slice(0, 18));
    } catch (error) {
      console.log("Error in useMainData hook " + " " + error);
    }
  };
  return games;
};



export default useMainData;
