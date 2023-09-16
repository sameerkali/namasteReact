import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

  const Table = () => {
  return (
    <>
      <div>Hello Table</div>
      <Link to="/">Home</Link>
    </>
  );
};

export default Table;

// const employee = fetch('https://dummy.restapiexample.com/api/v1/employees');
// console.log(employee.data.id)
