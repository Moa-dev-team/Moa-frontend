import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { SiNaver } from "react-icons/si";
import styles from "./SnsLoginBtn.module.css";

export default function SnsLoginBtn({ text }) {
  return (
    <li>
      <button className={styles.button}>
        {text === "Google" ? (
          <FcGoogle className={styles.logo} />
        ) : text === "Github" ? (
          <FaGithub className={styles.logo} />
        ) : (
          <SiNaver className={styles.logo} style={{ color: "#0ed55e" }} />
        )}
        <span className={styles.text}>{text} 계정으로 로그인</span>
      </button>
    </li>
  );
}
