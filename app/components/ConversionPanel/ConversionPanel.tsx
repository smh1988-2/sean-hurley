import React from "react";
import Image from "next/image";

import { work_sans } from "@/app/fonts";

import styles from "./conversionPanel.module.css";

import mergeIcon from "../../../public/icons/merge_type_FILL0_wght400_GRAD0_opsz24.svg";

function ConversionPanel() {
  return (
    <section className={styles.converionPanelSection}>
      <div className={`container ${styles.conversionPanelContainer}`}>
        <h2
          className={`${work_sans.className} ${styles.converionPanelHeading}`}
        >
          #Open to work
        </h2>

        <a href="https://www.linkedin.com/in/sean-hurley/" className={styles.converionPanelButton}>
          <Image src={mergeIcon} alt="" width={70} height={70} />
        </a>
      </div>
    </section>
  );
}

export default ConversionPanel;
