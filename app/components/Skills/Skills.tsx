import React from "react";

import styles from "./skills.module.css"
import { work_sans } from "@/app/fonts";
import SkillCard from "../Cards/SkillCard/SkillCard";

import code from "../../../public/icons/code_blocks_FILL0_wght400_GRAD0_opsz24.svg"
import js from "../../../public/icons/javascript_FILL0_wght400_GRAD0_opsz24.svg"
import ts from "../../../public/icons/keyboard_FILL0_wght400_GRAD0_opsz24.svg"
import react from "../../../public/icons/deployed_code_FILL0_wght400_GRAD0_opsz24.svg"
import next from "../../../public/icons/start_FILL0_wght400_GRAD0_opsz24.svg"
import git from "../../../public/icons/memory_FILL0_wght400_GRAD0_opsz24.svg"
import cloud from "../../../public/icons/cloud_upload_FILL0_wght400_GRAD0_opsz24.svg"
import ror from "../../../public/icons/data_object_FILL0_wght400_GRAD0_opsz24.svg"
import sql from "../../../public/icons/join_FILL0_wght400_GRAD0_opsz24.svg"

const skills = [
    {
        icon: code,
        heading: "HTML & CSS",
        subheading: "Writing clean, accessible, and maintainable basics"  
    },
    {
        icon: js,
        heading: "Javascript",
        subheading: "Making websites do stuff"  
    },
    {
        icon: ts,
        heading: "Typescript",
        subheading: "Making websites do smarter, safer, better stuff"  
    },
    {
        icon: react,
        heading: "React",
        subheading: "Modern websites need modern solutions"  
    },
    {
        icon: next,
        heading: "Next.js",
        subheading: "Even modern-er websites need modern-er frameworks"    
    },
    {
        icon: git,
        heading: "Version Control/Git",
        subheading: "Keeping everything in order and in working order"  
    },
    {
        icon: cloud,
        heading: "AWS",
        subheading: "What good is a website without putting it on the web?"  
    },
    {
        icon: ror,
        heading: "Ruby on Rails",
        subheading: "I do backend too"  
    },
    {
        icon: sql,
        heading: "SQL/PostgreSQL",
        subheading: "Databases are the basis for all data"  
    },
]


function Skills() {
  return (
    <section className={styles.skillsSection} id="skills">
      <div className={`container ${styles.skillsContainer}`}>
        <h2 className={`section-heading ${work_sans.className}`}>The 💪 skills I bring 🎯</h2>

        <div className={styles.skillsCardContainer}>
            {skills.map((skill) => {
                return (
                    <SkillCard skill={skill} key={skill.heading} />
                )
            })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
