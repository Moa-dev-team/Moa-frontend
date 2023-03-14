import React from "react";
import styles from "./SideBar.module.css";
import SideBarList from "./SideBarList";

export default function SideBar({ onClick, categoryList, categories }) {
  return (
    <ul className={styles.category}>
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
