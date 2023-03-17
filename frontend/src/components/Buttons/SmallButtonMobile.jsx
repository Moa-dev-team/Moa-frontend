import React from "react";
import styles from './SmallButtonMobile.module.css'

export default function SmallButtonMobile({ text, onClick, backgroundColor, textColor }) {
  const color = {
    backgroundColor : backgroundColor,
    color : textColor,
  }
  return (
    <button className={styles.button} onClick={onClick} style={color}>
      {text}
    </button>
  );
}
