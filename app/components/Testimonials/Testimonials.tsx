"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

import styles from "./testimonials.module.css";

import mary from "../../../public/images/mary.jpg";
import irene from "../../../public/images/irene.jpeg";
import nicholas from "../../../public/images/nicholas.jpeg";
import mindy from "../../../public/images/mindy.jpeg";
import kara from "../../../public/images/kara.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialSlide from "./TestimonialSlide";

const testimonialsContent = [
  {
    name: "Mary Ferrer",
    title: "Developer, Webstacks",
    testimonial:
      "Sean consistently delivered high-quality work using both traditional and headless content management systems and was quick to onboard and contribute to whichever project he was needed on.",
    image: mary,
  },
  {
    name: "Irene Tan",
    title: "Project Manager, Webstacks",
    testimonial:
      "He is meticulous with his work and goes the extra mile to ensure transparency and credibility through collaboration and documentation.",
    image: irene,
  },
  {
    name: "Nicholas Mansfield",
    title: "Head of Design, Webstacks",
    testimonial:
      "Sean was a great digital manager and continually pushed our team to the next level. He has a voracious appetite to learn and is never afraid to try something new. ",
    image: nicholas,
  },
  {
    name: "Mindy Budgor",
    title: "Director of Marketing, TripleMint",
    testimonial:
      "Clear communication, effective reasoning, and a strong desire to achieve are immediately what come to mind when I think of when working with Sean. Anyone would be lucky to have him on their team.",
    image: mindy,
  },
  {
    name: "Kara Chiono",
    title: "Senior Marketing Manager, AltSchool",
    testimonial:
      "He has the rare ability to bring a creative lens to everything he does while also being tactical and analytical. This combination of skills enables him to deliver superb results and drive growth for the business.",
    image: kara,
  },
];

function Testimonials() {
  return (
    <section className={styles.testimonialsSection} id="testimonials">
      <div className={`container ${styles.testimonialsContainer}`}>
        <h2 className={`section-heading section-heading-centered ${styles.testimonialsHeading}`}>
          My former colleages have nice things to say
        </h2>

        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          direction={"vertical"}
          slidesPerView={"auto"}
          navigation={true}
          className="testimonialSwiper"
          pagination={{ clickable: true }}
          loop={true}
          centeredSlides={true}
          autoHeight={true}
        >
          {testimonialsContent.map((testimonial) => {
            return (
              <SwiperSlide key={testimonial.name}>
                <TestimonialSlide testimonial={testimonial}  />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
