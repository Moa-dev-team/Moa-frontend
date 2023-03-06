import React from "react";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import styles from "./MobileLoginButton.module.css";

export default function MobileLoginButton({ type, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {type === "login" ? <FiLogIn /> : <FiLogOut />}
    </button>
  );
}
