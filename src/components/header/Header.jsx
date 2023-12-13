import React from "react";
import "./Header.css";
import { GamepadIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [login, setLogin] = useState(true);
  const setLoginState = () => {
    return login === true ? setLogin(false) : setLogin(true);
  };
  const select = useSelector((store) => store.app.bool);
  console.log("hii ",select)

  //redux get name
  const name = useSelector((store) => store.app.name)
  if (!select) return null;

  return (
    <>
      <div className="header">
        <GamepadIcon className="left icon" /> <h2>GameRide_s</h2>
        <div className="nav-item">
          <ul>
            <Link style={{ marginLeft: "2rem", color: "#000" }} to={`/`}>
              Home
            </Link>
            <Link style={{ marginLeft: "2rem", color: "#000" }} to={`/about`}>
              About
            </Link>
            <Link style={{ marginLeft: "2rem", color: "#000" }} to={`/contact`}>
              Contact
            </Link>
            <Link style={{ marginLeft: "2rem", color: "#000" }} to={`/apps`}>
              Apps
            </Link>
          </ul>
        </div>
        <div className="nav-item">
          <ul>
            <li>Cart</li>
            <li>{name/* i want the name here from redux */}</li>
            {login ? (
              <button className="btn right " onClick={setLoginState}>
                Login
              </button>
            ) : (
              <button className="btn right " onClick={setLoginState}>
                Logout
              </button>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
