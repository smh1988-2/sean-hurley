import React from "react";
import styles from "./hero.module.css";

import waveIcon from "../../../public/icons/waving_hand_FILL0_wght400_GRAD0_opsz24.svg";

import { work_sans } from "@/app/fonts";

import Button from "../Buttons/Button";

function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        <h1 className={work_sans.className}>
          <span>Software engineer</span>
          <br />
          <span>&nbsp;&nbsp;&nbsp;&nbsp;with a 🔥 passion for</span>
          <br />
          <span>creating beautiful websites</span>
        </h1>

        <div className={styles.heroTextContainer}>
          <p>
            Hi! I&apos;m Sean Hurley, a software engineer with a passion for creating
            beautiful, accessible, and functional websites to help your business
            grow 📈 and succeed!
          </p>
        </div>

        <div className={styles.heroButtonContainer}>
          <Button
            content="Let's Talk"
            icon="waveIcon"
            bgColor="primary"
            color="black"
            link="https://www.linkedin.com/in/sean-hurley/"
          />
          <Button
            content="Download Resume"
            icon="arrowIcon"
            bgColor="transparent"
            color="gray"
            link="https://sh-storage-24.s3.us-west-1.amazonaws.com/sean-hurley-resume.pdf"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
