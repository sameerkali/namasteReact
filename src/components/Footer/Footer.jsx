import React from "react";
import "./Footer.css";
import { Github, Linkedin, Twitter} from "lucide-react";

const Footer = () => {
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
            <li> <Github/> </li>
            <li> <Linkedin/> </li>
            <li> <Twitter /> </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
