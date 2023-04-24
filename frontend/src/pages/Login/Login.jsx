import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import { FcGoogle } from "react-icons/fc";
import { SiNaver, SiGithub } from "react-icons/si";
import styles from "./Login.module.css";
import LoginButton from "../../components/buttons/LoginButton";
import axios from "axios";

const loginSNS = [
  {
    id: 1,
    text: "구글",
    logo: <FcGoogle className={styles.google} />,
  },
  {
    id: 2,
    text: "네이버",
    logo: (
      <SiNaver
        style={{ color: "#03c75b", borderRadius: "50%" }}
        className={styles.naver}
      />
    ),
  },
  {
    id: 3,
    text: "깃허브",
    logo: <SiGithub className={styles.github} />,
  },
];

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        form,
        {
          withCredentials: true,
        }
      );
      console.log(response);
      // Redirect to another page or show a success message
    } catch (error) {
      console.error(error);
      // Show an error message or handle the error
    }
  };

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
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="이메일"
            value={form.email}
            required
          />
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="비밀번호"
            value={form.password}
            required
          />
          <button className={styles.loginBtn}>로그인</button>
        </form>
        <Link className={styles.signUpBtn} to="/sign-up">
          회원가입
        </Link>
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
