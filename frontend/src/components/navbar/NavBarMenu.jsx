import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBarMenu.module.css";

const style = {
  color: "var(--color-blue)",
};

export default function NavBarMenu({ menu: { text, path } }) {
  return (
    <li className={styles.list}>
      <NavLink
        to={path}
        className={styles.link}
        style={({ isActive }) => (isActive ? style : {})}
      >
        {text}
      </NavLink>
    </li>
  );
}
