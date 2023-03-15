import React from "react";
import styles from "./SmallButton.module.css";

export default function SmallButton({ text, onClick, backgroundColor, textColor }) {
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
