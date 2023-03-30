import React from "react";
import styles from "./LoginButton.module.css";

export default function LoginButton({ sns }) {
  return (
    <li>
      <button className={styles.button}>
        {sns.logo}
        <span className={styles.text}>{sns.text}</span>
      </button>
    </li>
  );
}
