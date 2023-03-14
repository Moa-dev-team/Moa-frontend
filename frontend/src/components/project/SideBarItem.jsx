import React from "react";
import styles from "./SideBarItem.module.css";

export default function SideBarItem({ item, onClick, categoryList }) {
  return (
    <li className={styles.list}>
      <label htmlFor={item.text} className={styles.label}>
        {item.text}
      </label>
      <input
        className={styles.checkbox}
        onChange={() => onClick(item.text)}
        type="checkbox"
        checked={categoryList.includes(item.text) ? true : false}
        id={item.text}
      />
    </li>
  );
}
