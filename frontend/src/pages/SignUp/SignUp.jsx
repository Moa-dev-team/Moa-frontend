import React, { useState } from "react";
import logo from "../../assets/images/Logo.png";
import styles from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../api/auth";

export default function SignUp() {
  const navigate = useNavigate();
  const [pwError, setPwError] = useState(false);
  const [form, setForm] = useState({
    nickname: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pwError) {
      signUp(form);
      navigate("/login");
    }
  };
  const checkPassword = (pw1, pw2) => {
    if (pw1 !== pw2) {
      setPwError(true);
    }
  };

  return (
    <section className={styles.page}>
      <Link to="/" className={styles.header}>
        <img className={styles.logoImage} src={logo} alt="logo" />
        <h1>Moa</h1>
      </Link>
      <div className={styles.modal}>
        <h2>회원가입</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="nickname">닉네임</label>
          <input
            onChange={handleChange}
            id="nickname"
            type="text"
            placeholder="닉네임"
            name="nickname"
            value={form.nickname}
          />
          <label htmlFor="email">이메일</label>
          <input
            onChange={handleChange}
            id="email"
            type="email"
            placeholder="이메일"
            name="email"
            value={form.email}
          />
          <label htmlFor="password">비밀번호</label>
          <input
            onChange={handleChange}
            id="password"
            type="password"
            placeholder="비밀번호"
            name="password"
            value={form.password}
          />
          <label htmlFor="confirm_password">비밀번호 확인</label>
          <input
            onChange={handleChange}
            onFocus={() => setPwError(false)}
            onBlur={() => checkPassword(form.password, form.confirm_password)}
            id="confirm_password"
            type="password"
            placeholder="비밀번호 확인"
            name="confirm_password"
            value={form.confirm_password}
          />
          {pwError && (
            <p className={styles.pwError}>비밀번호가 일치하지 않습니다.</p>
          )}
          <button className={styles.signUpBtn}>가입하기</button>
        </form>
      </div>
    </section>
  );
}
