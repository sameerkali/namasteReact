import React, { useState, useEffect } from "react";
import axios from "axios";
import Shimmer from "../Others/shimmar";
import { useParams } from "react-router-dom";

const api_secret_key = process.env.api_secret_key;

const Details = () => {
  const [details, setDetails] = useState(null);
  const { gameId } = useParams();

  useEffect(() => {
    api_details();
  }, []);

  const api_details = async () => {
    const response = await axios.get(`https://api.rawg.io/api/games/${gameId}?key=${api_secret_key}`);
    const data = await response.data;
    setDetails(data);

    if (details !== null) {
      // The game details have been fetched, so we can safely call the map() function
      return details.map((data) => (
        <div key={data.id}>
          <h1>{data.name}</h1>
          <p>{data.rating}</p>
          <p>{data.updated}</p>
          <span>{data.requirements_en}</span>
          <span>{data.description}</span>
        </div>
      ));
    } else {
      // The game details have not yet been fetched, so we return a placeholder component
      return <Shimmer />;
    }
  };

  return (
    <div>
      {api_details()}
    </div>
  );
};

export default Details;
