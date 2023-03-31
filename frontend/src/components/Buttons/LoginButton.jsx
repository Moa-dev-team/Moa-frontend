import React from "react";
import styles from "./LoginButton.module.css";

export default function LoginButton({ sns }) {
  return (
    <li className={styles.list}>
      <button className={styles.button}>{sns.logo}</button>
    </li>
  );
}
