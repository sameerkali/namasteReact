import React from "react";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <>
      <div><h1>login page</h1></div>
      <Link to={`/`}>Home</Link>
    </>
  );
};

export default login;
