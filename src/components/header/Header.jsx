import React from "react";
import "./Header.css";
import { GamepadIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";


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
          <Link style={{marginLeft: '2rem', color: '#000'}} to={`/`}>Home</Link>
          <Link style={{marginLeft: '2rem', color: '#000'}} to={`/about`}>About</Link>
          <Link style={{marginLeft: '2rem', color: '#000'}} to={`/contact`}>Contact</Link>
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
