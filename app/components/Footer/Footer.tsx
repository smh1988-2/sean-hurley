import React from "react";

import styles from "./footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.wordmarkContainer}>
          <Image
            className={styles.footerProfile}
            src="/images/sh-circle.png"
            height={50}
            width={50}
            alt=""
          />
          <p className={styles.footerWordmark}>Sean Hurley</p>
        </div>

        <div className={styles.footerListContainer}>
          <ul className={styles.footerList}>
            <li><a href="https://www.linkedin.com/in/sean-hurley/">LinkedIn</a></li>
            <li><a href="https://www.linkedin.com/in/sean-hurley/">Github</a></li>
            <li><a href="mailto:seanmhurley1988@gmail.com">Email</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
