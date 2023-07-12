import React from "react";
import "./testimonials.css";
import DataReview from "./DataReview";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {DataReview.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className="testimonial">
            <img src={avatar} alt={name} className="client__avatar" />
            <div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
