import React, { ReactNode } from "react";
import styles from "./buttons.module.css";
import Image from "next/image";

import waveIcon from "../../../public/icons/waving_hand_FILL0_wght400_GRAD0_opsz24.svg";

import arrowIcon from "../../../public/icons/arrow_right_alt_FILL0_wght400_GRAD0_opsz24.svg";

interface ButtonProps {
  content: string;
  icon: ReactNode | string;
  bgColor: string;
  color: string;
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
      console.log(`none.`);
  }

  return (
    <button
      className={`
        ${styles.btn} 
        ${styles[props.bgColor]}
        ${styles[props.color]}
        `}
    >
      <Image src={icon} className={styles[props.icon]} alt="" />
      {props.content}
    </button>
  );
}

export default Button;
