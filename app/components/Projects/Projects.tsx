import React from "react";

import styles from "./projects.module.css";
import ProjectCard from "../Cards/ProjectCard/ProjectCard";

import taylorem from "../../../public/images/taylorem.png"

const projects = [
  {
    title: "Taylorem Ipswift",
    description: "Lorem ipsum sit alor decorum",
    tools: ["HTML5", "CSS", "AWS", "Google Analytics"],
    link: "https://www.taylorem-ipswift.com/",
    image: taylorem,
  },
  {
    title: "Taylorem Ipswift",
    description: "Lorem ipsum sit alor decorum",
    tools: ["HTML5", "CSS", "AWS", "Google Analytics"],
    link: "https://www.taylorem-ipswift.com/",
    image: taylorem,
  },
  {
    title: "Taylorem Ipswift",
    description: "Lorem ipsum sit alor decorum",
    tools: ["HTML5", "CSS", "AWS", "Google Analytics"],
    link: "https://www.taylorem-ipswift.com/",
    image: taylorem,
  },
  {
    title: "Taylorem Ipswift",
    description: "Lorem ipsum sit alor decorum",
    tools: ["HTML5", "CSS", "AWS", "Google Analytics"],
    link: "https://www.taylorem-ipswift.com/",
    image: taylorem,
  },
];

function Projects() {
  return (
    <section className={styles.projectsSection} id="projects">
      <div className={`container ${styles.projectsContainer}`}>
        <h2 className={`section-heading ${styles.projectsHeading}`}>
          Some of the projects 🗃️ that I've built🧱 or worked on
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
