import React from "react";

import styles from "./testimonials.module.css";
import Image from "next/image";

interface TestimonialSlideProps {
  testimonial: {
    name: string;
    title: string;
    testimonial: string;
  };
}

function TestimonialSlide(propsIn: TestimonialSlideProps) {
  const props = { ...propsIn };

  return (
    <div>
      <p className={styles.testimonialText}>{props.testimonial.testimonial}</p>
      <p>
        <span className={styles.testimonialName}>{props.testimonial.name}</span>
        ,&nbsp;
        <span className={styles.testimonialTitle}>
          {props.testimonial.title}
        </span>
      </p>

      <Image src={"/../../../public/images/sh.png"} alt="" width={100} height={100} />
    </div>
  );
}

export default TestimonialSlide;
