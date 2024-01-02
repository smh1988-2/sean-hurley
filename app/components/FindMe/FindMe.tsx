import React from "react";
import Button from "../Buttons/Button";

import styles from "./findme.module.css";
import profilePic from "../../../public/images/sh.png";
import Image from "next/image";

function FindMe() {
  return (
    <section className={styles.findMeSection}>
      <div className={`container ${styles.findMeContainer}`}>
        <div>
          {/* <p className={styles.findMeText}>Find me:</p> */}

          <div className={styles.buttonContainer}>
            <Button
              content="In"
              icon=""
              bgColor="transparent"
              color="black"
              type="text"
              link="https://www.linkedin.com/in/sean-hurley/"
            />
            <Button
              content="Gh"
              icon=""
              bgColor="transparent"
              color="black"
              type="text"
              link="https://github.com/smh1988-2/"
            />
            <Button
              content="Em"
              icon=""
              bgColor="transparent"
              color="black"
              type="text"
              link="seanmhurley1988@gmail.com"
            />
          </div>
        </div>

        <div className={styles.line}></div>

        <div className={styles.imageContainer}>
          <div className={styles.imageBgContainer}>
            <div className={styles.bgShape}></div>
            <Image
              src={profilePic}
              height="700"
              alt=""
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FindMe;
