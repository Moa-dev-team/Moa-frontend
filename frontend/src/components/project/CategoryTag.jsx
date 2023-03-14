import React from "react";
import styles from "./CategoryTag.module.css";
import { FiX } from "react-icons/fi";

export default function CategoryTag({ category, onClick, color }) {
  return (
    <li
      className={styles.list}
      onClick={() => onClick(category)}
      style={{ backgroundColor: color }}
    >
      <span className={styles.text}>{category}</span>
      <FiX className={styles.cancel} />
    </li>
  );
}
