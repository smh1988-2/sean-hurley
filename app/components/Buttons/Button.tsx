import React, { ReactNode } from "react";
import styles from "./buttons.module.css";
import Image from "next/image";

import waveIcon from "../../../public/icons/waving_hand_FILL0_wght400_GRAD0_opsz24.svg";

import arrowIcon from "../../../public/icons/arrow_right_alt_FILL0_wght400_GRAD0_opsz24.svg";

interface ButtonProps {
  content: string;
  link?: string;
  icon: ReactNode | string;
  bgColor: string;
  color: string;
  type?: string;
}

function Button(propsIn: ButtonProps) {
  const props = { ...propsIn };

  let icon;

  switch (props.icon) {
    case "waveIcon":
      icon = waveIcon;
      break;
    case "arrowIcon":
      icon = arrowIcon;
      break;
    default:
  }

  return props.link ? (
    <a
      href={props.link}
      className={`
      ${styles.btn} 
      ${styles[props.bgColor]}
      ${styles[props.color]}
      ${styles[props.type]}
      `}
    >{props.type !== "text" ? (
      <Image src={icon} className={styles[props.icon]} alt="" />
    ) : null}
    {props.content}
  </a>
  ) : (
    <a
      className={`
      ${styles.btn} 
      ${styles[props.bgColor]}
      ${styles[props.color]}
      ${styles[props.type]}
      `}
    >
      {props.type !== "text" ? (
        <Image src={icon} className={styles[props.icon]} alt="" />
      ) : null}
      {props.content}
    </a>
  );
}

export default Button;
