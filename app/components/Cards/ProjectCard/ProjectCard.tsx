import React from "react";

import styles from "./projectCard.module.css";
import { work_sans } from "@/app/fonts";

import Image from "next/image";

function ProjectCard() {
  return (
    <div className={styles.projectCard}>
      <h3 className={`${work_sans.className} ${styles.projectCardTitle}`}>
        title
      </h3>
      <p className={styles.projectCardDescription}>description</p>
      <div className={styles.toolsContainer}>
        <p className={styles.projectCardTool}>Tool 1</p>
        <p className={styles.projectCardTool}>Tool 2</p>
      </div>

      <div className={styles.projectLinkContainer}>
      <a href="" className={`${work_sans.className} ${styles.projectCardLink}`}>
        View Project
      </a>
      <span className={styles.projectArrow}></span>
      </div>
    </div>
  );
}

export default ProjectCard;
