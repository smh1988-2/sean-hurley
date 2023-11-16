import React from 'react'

import styles from "./projectCard.module.css"
import Image from 'next/image'

function ProjectCard() {
  return (
    <div className={styles.projectCard}>
        <h3 className={styles.projectCardTitle}>title</h3>
        <p className={styles.projectCardDescription}>description</p>
        <div className={styles.toolsContainer}>
            <p className={styles.projectCardTool}>Tool 1</p>
            <p>Tool 2</p>
        </div>

        <a href="" className={styles.projectCardLink}>View Project</a>
        </div>
  )
}

export default ProjectCard