import React, { useEffect, useRef } from "react";
import styles from "./SideBar.module.css";
import SideBarList from "./SideBarList";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function SideBar({
  onClick,
  categoryList,
  categories,
  query,
  sideBar,
  handleSideBar,
}) {
  const sideBarEl = useRef();
  const closeSideBar = (e) => {
    if (sideBar && !sideBarEl.current.contains(e.target)) handleSideBar();
  };

  useEffect(() => {
    window.addEventListener("mousedown", closeSideBar);
    return () => window.removeEventListener("mousedown", closeSideBar);
  });

  return (
    <nav
      className={`${sideBar ? styles.container : styles.container__hidden} ${
        query ? styles.wide : ""
      }`}
    >
      <ul
        className={`${styles.category} ${query ? "" : styles.mobile}`}
        ref={sideBarEl}
      >
        {!query && (
          <AiOutlineArrowLeft
            className={styles.menuToggleBtn}
            onClick={handleSideBar}
          />
        )}
        {categories.map((categoryItems, index) => (
          <SideBarList
            key={index}
            categoryItems={categoryItems}
            onClick={onClick}
            categoryList={categoryList}
          />
        ))}
      </ul>
    </nav>
  );
}
