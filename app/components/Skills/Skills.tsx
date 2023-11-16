import React from "react";

import styles from "./skills.module.css"
import { work_sans } from "@/app/fonts";
import SkillCard from "../Cards/SkillCard/SkillCard";

import code from "../../../public/icons/code_blocks_FILL0_wght400_GRAD0_opsz24.svg"

const skills = [
    {
        icon: code,
        heading: "Front-end Development",
        subheading: "Lorem impsum sit alor decom"    
    },
    {
        icon: code,
        heading: "Front-end Development",
        subheading: "Lorem impsum sit alor decom"  
    },
    {
        icon: code,
        heading: "Front-end Development",
        subheading: "Lorem impsum sit alor decom"  
    },
]


function Skills() {
  return (
    <section className={styles.skillsSection}>
      <div className={`container ${styles.skillsContainer}`}>
        <h2 className={`section-heading ${work_sans.className}`}>The 💪 skills I bring 🎯</h2>

        <div className={styles.skillsCardContainer}>
            {skills.map((skill) => {
                return (
                    <SkillCard skill={skill} />
                )
            })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
