import React from "react";
import "./about.css";
import img from "../../img/b.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import Btn from '../btn/Btn'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="About-image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small> 1+ Years working </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small> 50+ Worldwide </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small> 70+ Completed </small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            recusandae atque eos, vitae dolorem laboriosam voluptas porro. Eos,
            corporis possimus enim, omnis inventore fugit, quis sit aut placeat
            perferendis officia?
          </p>
          {/* <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a> */}
          <Btn>Let's Talk</Btn>
        </div>
      </div>
    </section>
  );
};

export default About;
