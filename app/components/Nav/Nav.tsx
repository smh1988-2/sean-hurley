import React from 'react'

import styles from "./nav.module.css";
import Image from 'next/image';

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

      <div>
        <ul className={styles.navList}>
          <li><a href="https://www.linkedin.com/in/sean-hurley/">LinkedIn</a></li>
          <li><a href="https://www.linkedin.com/in/sean-hurley/">Github</a></li>
          <li><a href="mailto:seanmhurley1988@gmail.com">Email</a></li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Nav