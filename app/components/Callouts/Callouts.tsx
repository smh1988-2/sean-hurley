import React from "react";

import { work_sans } from "@/app/fonts";

import styles from "./callouts.module.css";

function Callouts() {
  return (
    <section className={styles.calloutsSection}>
      <div className={`container ${styles.conversionPanelContainer}`}>
        <h2
         className={`section-heading section-heading-centered ${work_sans.className}`}
        >
          I'm proud of the work I've done 🏆
        </h2>

      </div>
    </section>
  );
}

export default Callouts;
