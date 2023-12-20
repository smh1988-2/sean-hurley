import React from "react";

import styles from "./testimonials.module.css";
import Image from "next/image";

interface TestimonialSlideProps {
  testimonial: {
    name: string;
    title: string;
    testimonial: string;
    image: any;
  };
}

function TestimonialSlide(propsIn: TestimonialSlideProps) {
  const props = { ...propsIn };

  return (
    <div className={styles.testimonialSlide}>
      <p className={styles.testimonialText}>{props.testimonial.testimonial}</p>

      <div className={styles.testimonialCredit}>

      <Image
          src={props.testimonial.image}
          alt=""
          className={styles.testimonialAvatar}
          width={100}
          height={100}
        />

        <p>
          <span className={styles.testimonialName}>
            {props.testimonial.name}
          </span>
          ,&nbsp;
          <span className={styles.testimonialTitle}>
            {props.testimonial.title}
          </span>
        </p>

       
      </div>
    </div>
  );
}

export default TestimonialSlide;
