import React, { useEffect, useState } from "react";

const useMainData = (Api_url) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    api();
  }, []);

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
