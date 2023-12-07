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
    name: "",
    title: "",
    testimonial: "",
  },
  {
    name: "",
    title: "",
    testimonial: "",
  },
  {
    name: "",
    title: "",
    testimonial: "",
  },
];
function Testimonials() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={`container ${styles.testimonialsContainer}`}>
        <h2 className={`section-heading ${styles.testimonialsHeading}`}>
          My former colleages have nice things to say 😇
        </h2>

        <div className={styles.testimonialsSwiperContainer}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {testimonialsContent.map((testimonial) => {
              return <SwiperSlide>
                <TestimonialSlide testimonial={testimonial} />
              </SwiperSlide>;
            })}

      
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
