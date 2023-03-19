import React from "react";
import styles from "./SideBar.module.css";
import SideBarList from "./SideBarList";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function SideBar({ onClick, categoryList, categories, query }) {
  return (
    <ul className={`${styles.category} ${query ? "" : styles.mobile}`}>
      {!query && <AiOutlineArrowLeft className={styles.menuToggleBtn} />}
      {categories.map((categoryItems, index) => (
        <SideBarList
          key={index}
          categoryItems={categoryItems}
          onClick={onClick}
          categoryList={categoryList}
        />
      ))}
    </ul>
  );
}
