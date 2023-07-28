import React from "react";
import { useEffect } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { CiStickyNote } from "react-icons/ci";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

import { useState } from "react";

const Nav = () => {
  const [scroll, setScroll] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  });


  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={scroll < 500 ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        // className={scroll > 501 && scroll < 1200 ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        // className={scroll > 1201 && scroll < 1700 ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        // className={scroll > 1701 && scroll < 2500 ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        // className={scroll > 2501 && scroll < 4700 ? "active" : ""}
      >
        <AiOutlineAppstoreAdd />
      </a>
      <a
        href="#testimonials"
        onClick={() => setActiveNav("#testimonials")}
        // className={scroll > 4701 && scroll < 5300 ? "active" : ""}
      >
        <CiStickyNote />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        // className={scroll > 5301 && scroll < 5900 ? "active" : ""}
      >
        <BiMessageRoundedDetail />
      </a>
    </nav>
  );
};

export default Nav;
