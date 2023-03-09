import React from "react";
import styles from "./LargeButton.module.css";

export default function LargeButton({ text, onClick, color }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
}
