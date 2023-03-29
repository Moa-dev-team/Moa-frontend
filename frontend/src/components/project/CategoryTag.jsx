import React from "react";
import styles from "./CategoryTag.module.css";
import { FiX } from "react-icons/fi";

export default function CategoryTag({ category, onClick, color, isSkill }) {
  return (
    <li
      className={`${styles.list} ${isSkill ? styles.isSkill : ""}`}
      onClick={() => onClick(category)}
      style={{ backgroundColor: color }}
    >
      <span className={styles.text}>{category}</span>
      {!isSkill && <FiX className={styles.cancel} />}
    </li>
  );
}
