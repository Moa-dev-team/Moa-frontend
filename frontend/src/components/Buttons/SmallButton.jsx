import React from "react";
import styles from "./SmallButton.module.css";

export default function SmallButton({ text, onClick, color }) {
  return <button className={styles.button}>로그인</button>;
}
