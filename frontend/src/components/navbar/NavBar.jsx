import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import SmallButton from "../buttons/SmallButton";
import styles from "./NavBar.module.css";
import { FiMail } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import NavBarMenu from "./NavBarMenu";
import MobileLoginButton from "./MobileLoginButton";
import { useAuth } from "../../contexts/AuthContext";
import { logout } from "../../api/auth";

const navMenus = [
  { text: "프로젝트", path: "/projects", id: 1 },
  { text: "스터디", path: "/studies", id: 2 },
  { text: "유저", path: "/users", id: 3 },
];

export default function NavBar() {
  const { isUser, handleIsUser } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [mQuery, setMQuery] = useState(window.innerWidth < 768 ? true : false);

  const loginClick = () => {
    navigate("/login");
  };
  const logoutClick = async () => {
    await logout();
    handleIsUser();
    navigate("/");
  };
  const screenChange = (event) => {
    const matches = event.matches;
    setMQuery(matches);
  };

  useEffect(() => {
    const mql = window.matchMedia("screen and (max-width:768px)");
    mql.addEventListener("change", screenChange);

    return () => mql.removeEventListener("change", screenChange);
  }, []);

  if (pathname === "/login" || pathname === "/sign-up") {
    return <></>;
  }

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img className={styles.logo__image} src={logo} alt="logo" />
        <h1 className={styles.logo__title}>Moa</h1>
      </Link>
      <nav className={styles.nav_menus}>
        <ul className={styles.list}>
          {navMenus.map((navMenu) => (
            <NavBarMenu key={navMenu.id} menu={navMenu} />
          ))}
        </ul>
      </nav>
      <div className={styles.menus}>
        <Link to="/message">
          <FiMail
            className={styles.icon}
            style={
              pathname === "/message" ? { color: "var(--color-blue)" } : {}
            }
          />
        </Link>
        <Link to="/my-page">
          <CgProfile
            className={styles.icon}
            style={
              pathname === "/my-page" ? { color: "var(--color-blue)" } : {}
            }
          />
        </Link>
        {mQuery ? (
          isUser ? (
            <MobileLoginButton onClick={logoutClick} />
          ) : (
            <MobileLoginButton type="login" onClick={loginClick} />
          )
        ) : isUser ? (
          <SmallButton text="로그아웃" onClick={logoutClick} />
        ) : (
          <SmallButton text="로그인" onClick={loginClick} />
        )}
      </div>
    </header>
  );
}
