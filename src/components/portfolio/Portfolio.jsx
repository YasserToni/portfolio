import React from "react";
import "./portfolio.css";
import Data from "./data";
import "./btn.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {Data.map(({ id, img, title, github, demo }) => (
          <article key={id} className="portfolio__items">
            <div className="portfolio__items-image">
              <img src={img} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__itmes-cta">
              <a href={github} className="btn" target="_blank">
                Github
              </a>
              <a className="aa" href={demo} target="_blank">
                <span className="spanspan">Live Demo</span>
                <div class="liquid"></div>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
