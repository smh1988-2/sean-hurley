"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import styles from "./testimonials.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialSlide from "./TestimonialSlide";

const testimonialsContent = [
  {
    name: "John Doe",
    title: "Developer",
    testimonial: "Lorem ipsum sit alor decorum elit sin lorem ipsum.",
    image: "",
  },
  {
    name: "John Doe",
    title: "Developer",
    testimonial: "Lorem ipsum sit alor decorum elit sin lorem ipsum.",
    image: "",
  },
  {
    name: "John Doe",
    title: "Developer",
    testimonial: "Lorem ipsum sit alor decorum elit sin lorem ipsum.",
    image: "",
  },
];

function Testimonials() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={`container ${styles.testimonialsContainer}`}>
        <h2 className={`section-heading ${styles.testimonialsHeading}`}>
          My former colleages have nice things to say 😇
        </h2>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          className="testimonialSwiper"
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {testimonialsContent.map((testimonial) => {
            return (
              <SwiperSlide>
                <TestimonialSlide testimonial={testimonial} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
