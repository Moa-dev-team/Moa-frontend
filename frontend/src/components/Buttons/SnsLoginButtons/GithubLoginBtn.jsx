import React from "react";
import { FaGithub } from "react-icons/fa";
import styles from "./SnsLoginBtn.module.css";

export default function GithubLoginBtn() {
  const handelClick = () => {
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&scope=user&redirect_uri=http://localhost:3000/oauth2/callback/github`;
    window.location.href = authUrl;
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
