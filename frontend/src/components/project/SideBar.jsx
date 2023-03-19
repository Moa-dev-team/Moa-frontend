import React from "react";
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
  return (
    <nav
      className={`${sideBar ? styles.container : styles.container__hidden} ${
        query ? styles.wide : ""
      }`}
    >
      <ul className={`${styles.category} ${query ? "" : styles.mobile}`}>
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
