import React from "react";
import styles from "./ToggleButton.module.css";

export default function ToggleButton({ recruit, onClick }) {
  return (
    <div className={styles.toggleBtn}>
      <p className={styles.text}>모집 중</p>
      <label className={styles.switch}>
        <input
          className={styles.input}
          type="checkbox"
          onChange={onClick}
          checked={recruit}
        />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
}
