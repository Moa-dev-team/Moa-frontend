import React from "react";
import logo from "../../assets/images/Logo.png";
import { FcGoogle } from "react-icons/fc";
import { SiNaver, SiGithub } from "react-icons/si";
import styles from "./Login.module.css";
import LoginButton from "../../components/Buttons/LoginButton";

const loginSNS = [
  {
    text: "구글",
    logo: <FcGoogle className={styles.google} />,
    id: 1,
  },
  {
    text: "네이버",
    logo: <SiNaver className={styles.naver} />,
    id: 2,
  },
  {
    text: "깃허브",
    logo: <SiGithub className={styles.github} />,
    id: 3,
  },
];

export default function Login() {
  return (
    <div className={styles.page}>
      <section className={styles.modal}>
        <div className={styles.logo}>
          <img className={styles.logoImage} src={logo} alt="logo" />
          <h1>Moa</h1>
          <h2>로그인</h2>
        </div>
        <pre className={styles.description}>
          간단한 로그인 후 다양한 기능을 체험해보세요.
        </pre>
        <ul className={styles.list}>
          {loginSNS.map((sns) => (
            <LoginButton key={sns.id} sns={sns} />
          ))}
        </ul>
      </section>
    </div>
  );
}
