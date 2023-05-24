import React from "react";
import { FcGoogle } from "react-icons/fc";
import styles from "./SnsLoginBtn.module.css";
import { useGoogleLogin } from "@react-oauth/google";

export default function GoogleLoginBtn() {
  const handelClick = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse.code),
    flow: "auth-code",
  });

  return (
    <li>
      <button className={styles.button} onClick={handelClick}>
        <FcGoogle className={styles.logo} />
        <span className={styles.text}>Google 계정으로 로그인</span>
      </button>
    </li>
  );
}
