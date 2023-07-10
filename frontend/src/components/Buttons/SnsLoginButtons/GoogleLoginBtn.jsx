import React from "react";
import { FcGoogle } from "react-icons/fc";
import styles from "./SnsLoginBtn.module.css";
import { useGoogleLogin } from "@react-oauth/google";
import { getToken } from "../../../api/auth";

export default function GoogleLoginBtn() {
  const handleClick = useGoogleLogin({
    scope: "email profile",
    // onSuccess: async ({ code }) => {
    //   console.log(code);
    //   // const response = await getToken("google", code);
    //   // console.log(response);
    // },
    onError: (errorResponse) => {
      console.error(errorResponse);
    },
    flow: "auth-code",
    redirect_uri: "http://localhost:3000/oauth2/callback/google",
    ux_mode: "redirect",
  });

  return (
    <li>
      <button className={styles.button} onClick={handleClick}>
        <FcGoogle className={styles.logo} />
        <span className={styles.text}>Google 계정으로 로그인</span>
      </button>
    </li>
  );
}
