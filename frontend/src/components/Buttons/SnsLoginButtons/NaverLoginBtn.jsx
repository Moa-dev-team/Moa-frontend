import React from "react";
import { SiNaver } from "react-icons/si";
import styles from "./SnsLoginBtn.module.css";

export default function NaverLoginBtn() {
  const handelClick = () => {
    window.location.assign(
      `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${
        process.env.REACT_APP_NAVER_CLIENT_ID
      }&&redirect_uri=http://localhost:3000/callback&state=${Math.random()
        .toString(36)
        .substring(3, 14)}`
    );
  };

  return (
    <li>
      <button className={styles.button} onClick={handelClick}>
        <SiNaver className={styles.logo} style={{ color: "#05db60" }} />
        <span className={styles.text}>Github 계정으로 로그인</span>
      </button>
    </li>
  );
}
