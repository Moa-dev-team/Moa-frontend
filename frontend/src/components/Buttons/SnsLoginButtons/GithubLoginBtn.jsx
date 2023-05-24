import React from "react";
import { FaGithub } from "react-icons/fa";
import styles from "./SnsLoginBtn.module.css";

export default function GithubLoginBtn() {
  const handelClick = () => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&scope=user:email`
    );
  };
  return (
    <li>
      <button className={styles.button} onClick={handelClick}>
        <FaGithub className={styles.logo} style={{ color: "#000" }} />
        <span className={styles.text}>Github 계정으로 로그인</span>
      </button>
    </li>
  );
}
