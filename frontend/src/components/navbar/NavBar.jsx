import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";
import SmallButton from "../buttons/SmallButton";

const style = {
  color: "var(--color-blue)",
  pointerEvents: "none",
};

export default function NavBar() {
  return (
    <header>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
          <h1>Moa</h1>
        </Link>
        <NavLink
          to="/projects"
          style={({ isActive }) => (isActive ? style : {})}
        >
          프로젝트
        </NavLink>
        <NavLink
          to="/studies"
          style={({ isActive }) => (isActive ? style : {})}
        >
          스터디
        </NavLink>
        <NavLink to="/users" style={({ isActive }) => (isActive ? style : {})}>
          유저
        </NavLink>
      </div>
      <SmallButton />
    </header>
  );
}
