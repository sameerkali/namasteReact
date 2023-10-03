import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      marginTop: '20rem',
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      overflow: "hidden"
    }}>
      <h1 style={{ fontSize: "3rem" }}>Sameer's Profile</h1>
      <Link to="/" style={{ fontSize: "1rem", color: "blue", backgroundColor: "lightgray", padding: "10px", borderRadius: "5px" }}>Home</Link>
    </div>
  );
};

export default Profile;
