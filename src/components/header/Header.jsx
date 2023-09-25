import React from "react";
import "./Header.css";
import { GamepadIcon } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [login, setLogin] = useState(true);
  const setLoginState = () => {
    return login === true ? setLogin(false) : setLogin(true);
  };
  return (
    <>
      <div className="header">
        <GamepadIcon className="left icon" /> <h2>GameRide_s</h2>
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="nav-item">
          <ul>
            <li>Cart</li>
            {login ? <button className="btn right " onClick={setLoginState}>Login</button>: <button className="btn right " onClick={setLoginState}>Logout</button>}
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
