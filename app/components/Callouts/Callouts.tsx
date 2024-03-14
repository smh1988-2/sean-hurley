import React from "react";

import { work_sans } from "@/app/fonts";

import styles from "./callouts.module.css";
import CalloutCard from "./CalloutCard";

function Callouts() {
  return (
    <section className={styles.calloutsSection}>
      <div className={`container ${styles.calloutContainer}`}>
        <h2
          className={`section-heading section-heading-centered ${work_sans.className}`}
        >
          I&apos;m proud of the work I&apos;ve done 🏆
        </h2>

        <div className={styles.calloutWrapper}>
          <CalloutCard
            color={"green"}
            content={
              "I upsold clients on new projects and work by proactively suggesting updates and enhancements to their marketing websites, leading to increased revenue."
            }
            alignment={"left"}
          />
          <CalloutCard
            color={"purple"}
            content={
              "After my first year as a frontend developer, I was promoted to L2 & I was recognized for exceptional client communication at Webstacks."
            }
            alignment={"right"}
          />
          <CalloutCard
            color={"yellow"}
            content={
              "I took over as lead developer on a client's (Legit Security) marketing website relaunch at the last minute. We launched on-time and on-budget."
            }
            alignment={"left"}
          />
        </div>
      </div>
    </section>
  );
}

export default Callouts;
