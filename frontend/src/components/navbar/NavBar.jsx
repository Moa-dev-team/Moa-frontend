import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import SmallButton from "../buttons/SmallButton";
import styles from "./NavBar.module.css";

const style = {
  color: "var(--color-blue)",
  pointerEvents: "none",
};

export default function NavBar() {
  const navigate = useNavigate();
  const loginClick = () => {
    navigate("/login");
  };
  return (
    <header className={styles.header}>
      <div className={styles.logoAndMenus}>
        <Link to="/" className={styles.logo}>
          <img className={styles.logoImage} src={logo} alt="logo" />
          <h1 className={styles.title}>Moa</h1>
        </Link>
        <nav className={styles.menus}>
          <NavLink
            to="/projects"
            className={styles.link}
            style={({ isActive }) => (isActive ? style : {})}
          >
            프로젝트
          </NavLink>
          <NavLink
            to="/studies"
            className={styles.link}
            style={({ isActive }) => (isActive ? style : {})}
          >
            스터디
          </NavLink>
          <NavLink
            to="/users"
            className={styles.link}
            style={({ isActive }) => (isActive ? style : {})}
          >
            유저
          </NavLink>
        </nav>
      </div>
      <SmallButton text="로그인" onClick={loginClick} />
    </header>
  );
}
