import React from "react";

import styles from "./projects.module.css";
import ProjectCard from "../Cards/ProjectCard/ProjectCard";

import taylorem from "../../../public/images/taylorem.png"
import shortly from "../../../public/images/shortly.png"
import poke from "../../../public/images/poke.png"
import age from "../../../public/images/age.png"
import splitter from "../../../public/images/splitter.png"
import artplace from "../../../public/images/artplace.png"
import podkeeper from "../../../public/images/podkeeper.png"
import aspire from "../../../public/images/aspire.png"
import legit from "../../../public/images/legit.png"
import real from "../../../public/images/real.png"
import block from "../../../public/images/block.png"

const projects = [
  {
    title: "Aspire",
    description: "I worked on the on-going maintainence of Aspire's marketing website and built new features, templates, and pages for the site.",
    tools: ["Javascript", "jQuery", "Bootstrap", "HTML5", "CSS", "Hubspot", "Client Work"],
    link: "https://www.youraspire.com/",
    image: aspire,
  },
  {
    title: "Legit Security",
    description: "I led the development team on the relaunch of Legit Security's complete redesign of their Hubspot marketing website.",
    tools: ["Javascript", "jQuery", "Bootstrap", "HTML5", "CSS", "Hubspot", "Client Work"],
    link: "https://www.legitsecurity.com/",
    image: legit,
  },
  {
    title: "RealGeeks",
    description: "I led the development team for the ongoing maintenance and improvement for the RealGeeks marketing website. My focus was improving performance and SEO - which I did through code refactoring, caching, and optimization.",
    tools: ["React", "HTML5", "CSS", "jQuery", "Bootstrap", "SEO", "Hubspot", "Client Work"],
    link: "https://www.realgeeks.com/",
    image: real,
  },
  {
    title: "Blocknative",
    description: "Worked on the on-going maintenance of Blocknative's marketing website, including a complete refactoring of the Estimator tools.",
    tools: ["React", "HTML5", "CSS", "Hubspot", "Bootstrap", "Client Work"],
    link: "https://www.blocknative.com/",
    image: block,
  },
  {
    title: "Taylorem Ipswift",
    description: "Inject a dose of Taylor Swift's lyrical magic into your design projects, websites, or any creative endeavor that needs some Swift-inspired placeholder text.",
    tools: ["React", "HTML5", "CSS", "AWS", "Google Analytics"],
    link: "https://www.taylorem-ipswift.com/",
    image: taylorem,
  },
  {
    title: "Podkeeper",
    description: "A social podcast app. Users can sign up and find the podcasts they like, subscribe, and listen to episodes. They can rate podcasts and individual episodes. Users have a timeline of all their podcast activity, including what episodes they've listened to and when.",
    tools: ["React", "React Router", "HTML5", "Bootstrap", "Google Analytics", "Ruby on Rails", "jwt"],
    link: "https://www.loom.com/share/b64be6fd6696442a8bb0fb37265fcfe8?t=3",
    image: podkeeper,
  },
  {
    title: "Shortly",
    description: "Based on a Frontend Mentor Challenge. Create a short link from any URL.",
    tools: ["React", "CSS Modules", "AWS", "API"],
    link: "https://main.dk21oo3oocpv4.amplifyapp.com/",
    image: shortly,
  },
  {
    title: "Splitter",
    description: "Based on a Frontend Mentor Challenge. Calculate the tip and split the bill.",
    tools: ["HTML", "CSS ", "Javascript", "Flexbox", "CSS Grid"],
    link: "https://smh1988-2.github.io/fem-tip-calculator/",
    image: splitter,
  },
  {
    title: "Age Calculator",
    description: "Based on a Frontend Mentor Challenge. Calculate the years, months, and days since a date.",
    tools: ["HTML", "CSS ", "Javascript", "Flexbox", "CSS Grid"],
    link: "https://smh1988-2.github.io/fem-age-calculator/",
    image: age,
  },
  // {
  //   title: "Pokemon Team Builder",
  //   description: "Create tour ideal team of 6 Pokemon with information on their strengths and weaknesses",
  //   tools: ["Javascript", "HTML5", "CSS", "AWS", "API"],
  //   link: "https://main.d1z18mlmzmzyr7.amplifyapp.com/",
  //   image: poke,
  // },
  // {
  //   title: "ArtPlace",
  //   description: "Example landing page built with the Art Institue of Chicago's API.",
  //   tools: ["HTML5", "CSS", "React"],
  //   link: "https://main.d3icn8s5f0qe7v.amplifyapp.com/",
  //   image: artplace,
  // },
];

function Projects() {
  return (
    <section className={styles.projectsSection} id="projects">
      <div className={`container ${styles.projectsContainer}`}>
        <h2 className={`section-heading ${styles.projectsHeading}`}>
          Some of the projects 🗃️ that I&apos;ve built🧱 or worked on
        </h2>

        <div className={styles.projectCardsContainer}>
            {projects.map((project) => {
                return (
                    <ProjectCard project={project} key={project.title} />
                )
            })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
