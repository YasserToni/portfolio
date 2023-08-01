import React, { useEffect, useState } from "react";
import "./portfolio.css";
import Data from "./data";
import "./btn.css";

// const lenght = Data.length;
const Portfolio = () => {
    const [more, setMore] = useState(5);
    function handleMore() {
      setMore((e) => e + 3);
      if (Data.length === result.length) return setMore(5);
    }
    const result = Data.filter((e) => e.id <= more);


  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {result.map(({ id, img, title, github, demo }) => (
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
      <div className="more__container">
        <button className="more" onClick={handleMore}>
          {Data.length === result.length ? "Show less" : "Show more"}
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
