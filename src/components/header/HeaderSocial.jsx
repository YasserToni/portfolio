import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import "./header.css";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/yasser-korany-7373b019a" target="_blank">
        <BsLinkedin className="linkedin"/>
      </a>
      <a href="https://github.com/YasserToni?tab=repositories" target="_blank">
        <FaGithubSquare className="github" />
      </a>
      <a href="www://dribble.com" target="_blank">
        <FiDribbble className="dribbble"/>
      </a>
    </div>
  );
};

export default HeaderSocial;
