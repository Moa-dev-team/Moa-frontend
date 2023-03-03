import React from "react";
import styles from "./LoginButton.module.css";

export default function LoginButton({ sns: { id, logo, text, eng } }) {
  return (
    <li key={id}>
      <button className={styles.button}>
        {logo}
        <span>{text}로 로그인</span>
      </button>
    </li>
  );
}
