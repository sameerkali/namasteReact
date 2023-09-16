import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_data = "https://jsonplaceholder.typicode.com/todos";

const Table = () => {
  const [apiTitle, setApiTitle] = useState("");

  useEffect(() => {
    fetch(API_data)
      .then((response) => response.json())
      .then((data) => {
        setApiTitle(data[1].title);
      });
  }, []);

  return (
    <>
      <div>Hello Table</div>
      <Link to="/">Home</Link>
      <h1>{apiTitle}</h1>
    </>
  );
};

export default Table;

// const employee = fetch('https://dummy.restapiexample.com/api/v1/employees');
// console.log(employee.data.id)
