import React, { useState } from "react";
import "./Footer.css";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useContext } from "react";
import UserContext from "../Others/UserContext";
import { useDispatch } from "react-redux";
import { changeName, toggleBool } from "../../store/booleanSlice";

const Footer = () => {
  const {loggedInUser2 } = useContext(UserContext);
  const [hiname, sethiname] = useState('')
  const dispatch = useDispatch();
  const togglename = () => {
    dispatch(toggleBool());
  };
  const setNameHandler = () => {
    dispatch(changeName(hiname));
  };
const setnameeee = (e) => {
  sethiname(e.target.value)
}
  return (
    <>
      <div className="footer">
        <h2>
          All Copyright 2023
          <a href="https://github.com/sameerkali" target="_blank">
            @sameerkali
          </a>
        </h2>
        <div className="nav-item">
          <ul>
            <li>
              {" "}
              <Github />{" "}
            </li>
            <li>
              {" "}
              <Linkedin />{" "}
            </li>
            <li>
              {" "}
              <Twitter />{" "}
            </li>
            <li> {loggedInUser2} </li>
          </ul>
          <button onClick={togglename}> toggle header</button>
          <input
            type="text"
            value={hiname}
            onChange={setnameeee}
            placeholder="Enter your name"
          />
          <button onClick={setNameHandler}>Set Name</button>
        </div>
      </div>
    </>
  );
};

export default Footer;
