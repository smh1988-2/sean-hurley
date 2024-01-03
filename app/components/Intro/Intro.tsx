import React from "react";

import styles from "./Intro.module.css"

function Intro() {
  return (
    <section className={styles.introSection} id="about">
      <div className={`container`}>
        <p className={styles.introText}>
          Hi! 👋 I&apos;m Sean - I am a software engineer who builds fullstack web apps. I enjoy <span className={styles.highlight}>solving difficult problems</span> and learning new tools and technologies. Please check out my resume and projects and <span className={styles.highlight}>contact me</span> if you want to
          start a conversation
        </p>
      </div>
    </section>
  );
}

export default Intro;
