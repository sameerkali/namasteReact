import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const url = "https://jsonplaceholder.typicode.com/posts";

const apiData = () => {
  const [a, setA] = useState([]);
  useEffect(() => {
    const fetchDataFromApi = async () => {
        try {
            const data = await fetch(url)
            const makeJson = data.json()
            // setA(makeJson)
            console.log(makeJson)
        } catch (error) {
            console.log("error")
        }
    }
    fetchDataFromApi();
  }, []);

  return (
    <div>
      <h1>API Data Page:</h1>
      <h2>
        back to <Link to={`/`}>Home</Link>{" "}
      </h2>
      <h2> {a}</h2>
      <div>
        <h4> this is the data of api </h4>
      </div>
    </div>
  );
};

export default apiData;
