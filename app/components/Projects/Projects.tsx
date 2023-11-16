import React from "react";

import styles from "./projects.module.css";
import ProjectCard from "../Cards/ProjectCard/ProjectCard";

const projects = [
  {
    title: "Taylorem Ipswift",
    description: "Lorem ipsum sit alor decorum",
    tools: ["HTML5, CSS, AWS, Google Analytics"],
    link: "https://www.taylorem-ipswift.com/",
    image: "",
  },
  {
    title: "Taylorem Ipswift",
    description: "Lorem ipsum sit alor decorum",
    tools: ["HTML5, CSS, AWS, Google Analytics"],
    link: "https://www.taylorem-ipswift.com/",
    image: "",
  },
  {
    title: "Taylorem Ipswift",
    description: "Lorem ipsum sit alor decorum",
    tools: ["HTML5, CSS, AWS, Google Analytics"],
    link: "https://www.taylorem-ipswift.com/",
    image: "",
  },
  {
    title: "Taylorem Ipswift",
    description: "Lorem ipsum sit alor decorum",
    tools: ["HTML5, CSS, AWS, Google Analytics"],
    link: "https://www.taylorem-ipswift.com/",
    image: "",
  },
];

function Projects() {
  return (
    <section className={styles.projectsSection}>
      <div className={`container ${styles.projectsContainer}`}>
        <h2 className={`section-heading ${styles.projectsHeading}`}>
          Some of the projects 🗃️ that I've built or worked on
        </h2>

        <div className={styles.projectCardsContainer}>
            {projects.map((project) => {
                return (
                    <ProjectCard project={project} />
                )
            })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
