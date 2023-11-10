import React, { useState, useEffect } from "react";

const useApiDetails = (gameId) => {
  const [details, setDetails] = useState(null); // Initialize as null
  const api_secret_key = process.env.api_secret_key;

  useEffect(() => {
    api_details();
  }, [gameId]); // Re-run effect when gameId changes

  const api_details = async () => {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games/${gameId}?key=${api_secret_key}`
      );
      const data = await response.json();
      setDetails(data);
    } catch (error) {
      console.error("Error fetching details:", error);
    }
  };

  return details;
};

export default useApiDetails;
