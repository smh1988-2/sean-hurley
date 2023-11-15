import React from "react";
import styles from "./hero.module.css";

import { work_sans } from "@/app/fonts";

function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <h1 className={work_sans.className}>
          <span>Software engineer</span><br />
          <span>with a 🔥 passion for</span><br />
          <span>creating beautiful websites</span>
            
        </h1>

        <div className={styles.heroTextContainer}>
          <p>
            Hi! I'm Sean Hurley, a software engineer with a passion for creating
            beautiful, accessible, and functional websites to help your business
            grow 📈 and succeed!
          </p>

          <div className={styles.heroButtonContainer}>
            <button>Let's Talk</button>
            <button>Download Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
