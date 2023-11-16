import React from 'react'

import { work_sans } from "@/app/fonts";

import styles from "./conversionPanel.module.css"

function ConversionPanel() {
  return (
    <section className={styles.converionPanelSection}>
    <div className={`container ${styles.conversionPanelContainer}`}>
        <h2 className={`${work_sans.className} ${styles.converionPanelHeading}`}>#Open to work</h2>

        <button className={styles.converionPanelButton}></button>
    </div>
    </section>
  )
}

export default ConversionPanel