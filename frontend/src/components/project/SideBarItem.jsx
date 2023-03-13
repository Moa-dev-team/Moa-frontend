import React from "react";
import styles from "./SideBarItem.module.css";

export default function SideBarItem({ item, onClick }) {
  return (
    <li className={styles.list}>
      <label htmlFor={item} className={styles.label}>
        {item}
      </label>
      <input
        className={styles.checkbox}
        onClick={() => onClick(item)}
        type="checkbox"
        id={item}
      />
    </li>
  );
}
