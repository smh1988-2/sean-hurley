import React from "react";
import styles from "./callouts.module.css";

interface CalloutCardProps {
    color: string;
    content: string;
    alignment: string;
}

function CalloutCard(propsIn: CalloutCardProps) {
  const props = { ...propsIn };

  return <div className={styles.calloutCard} data-alignment={`${props.alignment}`} data-color={`${props.color}`}>
    <p className={styles.calloutCardText}>{props.content}</p>
  </div>;
}

export default CalloutCard;
