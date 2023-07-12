import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="www://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="www://github.com" target="_blank">
        <FaGithubSquare />
      </a>
      <a href="www://dribble.com" target="_blank">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocial;
