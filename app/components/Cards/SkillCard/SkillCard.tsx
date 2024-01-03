import React, { ReactNode } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { work_sans } from "@/app/fonts";

import styles from "./skillCard.module.css";
import Image from "next/image";

interface SkillCardProps {
  skill: {
    icon: any | StaticImport | ReactNode | string;
    heading: string;
    subheading: string;
  };
}

function SkillCard(propsIn: SkillCardProps) {
  const props = { ...propsIn };
  
  return (
    <div className={styles.skillCard}>
      <Image src={props.skill.icon} alt="" width={55} />
      <p className={`${styles.skillCardHeading} ${work_sans.className}`}>
        {props.skill.heading}
      </p>
      <p className={styles.skillCardSubheading}>{props.skill.subheading}</p>
    </div>
  );
}

export default SkillCard;
