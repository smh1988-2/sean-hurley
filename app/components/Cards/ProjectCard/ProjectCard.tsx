import React from "react";

import styles from "./projectCard.module.css";
import { work_sans } from "@/app/fonts";

import Image from "next/image";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tools: Array<string>;
    link: string;
    image: any;
  };
}

function ProjectCard(propsIn: ProjectCardProps) {
  const props = { ...propsIn };

  return (
    <div className={styles.projectCard}>
      <Image
        src={props.project.image}
        alt=""
        width={600}
        className={styles.projectImage}
      />
      <h3 className={`${work_sans.className} ${styles.projectCardTitle}`}>
        {props.project.title}
      </h3>
      <p className={styles.projectCardDescription}>
        {props.project.description}
      </p>
      <div className={styles.toolsContainer}>
        {props.project.tools.map((tool) => {
          return <p className={styles.projectCardTool} key={tool}>{tool}</p>;
        })}
      </div>

      <a href={props.project.link} className={styles.projectLinkContainer}>
        <p className={`${work_sans.className} ${styles.projectCardLink}`}>
          View Project
        </p>
        <span className={styles.projectArrow}></span>
      </a>
    </div>
  );
}

export default ProjectCard;
