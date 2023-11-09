import React from "react";
import "./other.css";

const Card = (props) => {
  return (
    <>

     <div className="card-wrapper">
      <div className="card-main">
        <img
          className="card-image"
          src = {...props.image} 
        />
        <h2>
        {...props.name}
        </h2>
      </div>
     </div>
    </>
  );
};

export default Card;
