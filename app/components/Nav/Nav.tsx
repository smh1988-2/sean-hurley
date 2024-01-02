import React from "react";

import styles from "./nav.module.css";
import Image from "next/image";

function Nav() {
  return (
    <nav className={styles.navSection}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.wordmarkContainer}>
          <Image
            className={styles.navProfile}
            src="/images/sh-circle.png"
            height={50}
            width={50}
            alt=""
          />
          <p className={styles.navWordmark}>Sean Hurley</p>
        </div>

        <div className={styles.navListContainer}>
          <ul className={styles.navList}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a
                className={styles.navCTA}
                href="https://www.linkedin.com/in/sean-hurley/"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
