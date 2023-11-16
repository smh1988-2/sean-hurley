import React, { ReactNode } from "react";

import { inter, work_sans } from "@/app/fonts";

import styles from "./skillCard.module.css";
import Image from "next/image";

interface SkillCardProps {
  skill: {
    icon: ReactNode | string;
    heading: string;
    subheading: string;
  };
}

function SkillCard(propsIn: SkillCardProps) {
  const props = { ...propsIn };

  console.log(props);

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
