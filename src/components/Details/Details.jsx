import React, { useState, useEffect } from "react";
import Shimmer from "../Others/shimmar";
import { useParams } from "react-router-dom";

const api_secret_key = process.env.api_secret_key;

const Details = () => {
  const [details, setDetails] = useState(null); // Initialize as null
  const { gameId } = useParams();

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
      console.log(data);
    } catch (error) {
      console.error("Error fetching details:", error);
    }
  };

  return (
    <>
      {details ? ( // Check if details is not null
        <div key={details.id}>
          <h1>{details.name}</h1>
          <img src={details.background_image} height={300} />
          <p>{details.rating}</p>
          <p>{details.updated}</p>
          <span>{details.requirements_en}</span>
          <p>{details.description}</p>
        </div>
      ) : (
        <Shimmer /> // Show a loading component while details are being fetched
      )}
    </>
  );
};

export default Details;
