import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../img/me2.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <div className="name">Yasser Toni</div>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="custom-loader scroll__down"></a>
      </div>
    </header>
  );
};

export default Header;
