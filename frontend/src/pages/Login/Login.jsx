import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import { FcGoogle } from "react-icons/fc";
import { SiNaver, SiGithub } from "react-icons/si";
import styles from "./Login.module.css";
import LoginButton from "../../components/buttons/LoginButton";

const loginSNS = [
  {
    id: 1,
    text: "구글",
    logo: <FcGoogle className={styles.google} />,
  },
  {
    id: 2,
    text: "네이버",
    logo: <SiNaver style={{ color: "#03c75b" }} className={styles.naver} />,
  },
  {
    id: 3,
    text: "깃허브",
    logo: <SiGithub className={styles.github} />,
  },
];

export default function Login() {
  return (
    <div className={styles.page}>
      <Link to="/" className={styles.header}>
        <img className={styles.logoImage} src={logo} alt="logo" />
        <h1>Moa</h1>
      </Link>
      <section className={styles.modal}>
        <h2 className={styles.logo}>로그인</h2>
        <pre className={styles.description}>
          로그인 후 다양한 기능을 체험해보세요.
        </pre>
        <form className={styles.form}>
          <input type="email" placeholder="이메일" />
          <input type="password" placeholder="비밀번호" />
          <button className={styles.loginBtn}>로그인</button>
        </form>
        <button className={styles.signUpBtn}>회원가입</button>
        <aside className={styles.snsLogin}>
          <div>sns로 로그인하기</div>
          <ul className={styles.snsLoginBtns}>
            {loginSNS.map((sns) => (
              <LoginButton key={sns.id} sns={sns} />
            ))}
          </ul>
        </aside>
      </section>
    </div>
  );
}
