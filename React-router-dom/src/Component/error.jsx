import React from "react";
import { Link } from "react-router-dom";

const error = () => {
  return (
    <div>
      <h1>Error Page</h1> <p>return to </p>
      <Link to={`/`}>Home</Link>
    </div>
  );
};

export default error;
