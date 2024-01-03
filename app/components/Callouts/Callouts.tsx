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
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget arcu scelerisque, maximus lorem ac, aliquet odio. Nunc non blandit mi. Etiam tristique nulla tellus, ut condimentum sapien ullamcorper at."
            }
            alignment={"left"}
          />
          <CalloutCard
            color={"purple"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget arcu scelerisque, maximus lorem ac, aliquet odio. Nunc non blandit mi. Etiam tristique nulla tellus, ut condimentum sapien ullamcorper at."
            }
            alignment={"right"}
          />
          <CalloutCard
            color={"yellow"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget arcu scelerisque, maximus lorem ac, aliquet odio. Nunc non blandit mi. Etiam tristique nulla tellus, ut condimentum sapien ullamcorper at."
            }
            alignment={"left"}
          />
        </div>
      </div>
    </section>
  );
}

export default Callouts;
